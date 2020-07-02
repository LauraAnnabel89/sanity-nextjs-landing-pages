import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import ImageSliderContent from "./ImageSliderContent";
import ImageGrid from "./ImageGrid";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import Dots from "./Dots";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function Hero(props) {
  const { heading, image, tagline, ctas, reverseColour } = props;
  const images = props.image;

  const size = useWindowSize();

  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
    autoPlay: 4,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * size,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * size,
        activeIndex: images.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * size,
    });
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, state.autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ color: reverseColour && "black" }}>
          {heading}
        </h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        <div>
          <ImageSliderContent
            translate={translate}
            transition={transition}
            width={size * images.length}
          >
            {images.map((image, index) => (
              <ImageSlide key={image + index} content={builder.image(image).auto("format").url()} />
            ))}
          </ImageSliderContent>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
