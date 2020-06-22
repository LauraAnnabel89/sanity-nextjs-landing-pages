/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { css, jsx } from "@emotion/core";
import ImageSliderContent from "./ImageSliderContent";
import styles from "./LocationsImageGallery.module.css";
import ImageGrid from "./ImageGrid";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import Dots from "./Dots";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);

const LocationsImageGallery = (props) => {
  const { caption, image } = props;

  const images = props.image;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeSlide: 0,
  });

  const [showSlider, setShowSlider] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  const { translate, transition, activeSlide, _slides } = state;

  const size = useWindowSize();
  const transitionRef = useRef();

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

  const nextSlide = () => {
    if (activeSlide === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * size.width,
    });
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * size.width,
        activeSlide: images.length - 1,
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * size.width,
    });
  };

  const show = (index) => {
    console.log(index, state, activeSlide);
    setShowGrid(false);
    setState({ ...state, activeSlide: index, setShowSlider: true });
  };

  const hide = () => {
    setShowSlider(false);
    setShowGrid(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <a href="/locations">X</a>
      </div>
      {showGrid && (
        <div className={styles.imageGrid}>
          <div className={styles.imageGridContainer}>
            {images.map((image, index, caption) => (
              <div className={styles.imageContainer} onClick={() => show(index)}>
                <img
                  src={builder.image(image).auto("format").width(2000).url()}
                  className={styles.image}
                  alt={image.caption}
                  key={index}
                />
                <p className={styles.caption}>{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showSlider && (
        <div className={styles.imageGalleryContainer}>
          <div css={ImageSliderCSS}>
            <ImageSliderContent
              translate={translate}
              transition={transition}
              width={size.width * images.length}
            >
              {images.map((image, index, caption) => (
                <>
                  <ImageSlide
                    key={image + index}
                    content={builder.image(image).auto("format").url()}
                  ></ImageSlide>
                </>
              ))}
            </ImageSliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
          </div>
          <div className={styles.infoBar}>
            <p className={styles.infoCaption}>
              Locations / <span>{image.caption}</span>
            </p>
            <a href="" onClick={hide} className={styles.infoThumbnails}>
              Show Thumbnails
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageSliderCSS = css`
  position: relative;
  height: 80vh;
  width: 60em;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
export default LocationsImageGallery;
