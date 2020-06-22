/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { css, jsx } from "@emotion/core";
import ImageSliderContent from "./ImageSliderContent";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";
import Dots from "./Dots";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);

const ImageSlider = (props) => {
  const { caption, image } = props;

  const images = props.image;

  const size = useWindowSize();
  const transitionRef = useRef();

  const firstSlide = images[0];
  const secondSlide = images[1];
  const lastSlide = images[images.length - 1];

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
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeSlide: 0,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, activeSlide, _slides } = state;

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

  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: size.width,
    });
  };

  return (
    <div css={ImageSliderCSS}>
      <ImageSliderContent
        translate={translate}
        transition={transition}
        width={size.width * images.length}
      >
        {images.map((image, index) => (
          <ImageSlide
            key={image + index}
            content={builder.image(image).auto("format").width(2000).url()}
          ></ImageSlide>
        ))}
      </ImageSliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={images} activeSlide={activeSlide} />
    </div>
  );
};

const ImageSliderCSS = css`
  position: relative;
  height: 500px;
  width: 750px;
  margin: 0 auto;
  overflow: hidden;
`;
export default ImageSlider;
