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
import Link from "next/link";

const builder = imageUrlBuilder(client);

const LocationsImageGallery = (props) => {
  const { caption, image } = props;

  const images = props.image;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeSlide: 0,
  });

  const [showSlider, setShowSlider] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

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

    setState((state) => ({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * 60,
    }));
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * 60,
        activeSlide: images.length - 1,
      });
    }

    setState((state) => ({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * 60,
    }));
  };

  const show = (index) => {
    setShowGrid(false);
    setShowSlider(true);
    setState({
      ...state,
      activeSlide: index,
      translate: index * 60,
    });
  };

  const hide = () => {
    setShowSlider(false);
    setShowGrid(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {showGrid ? (
          <span
            className={styles.fakeLink}
            onClick={() => {
              show(activeSlide);
            }}
          >
            X
          </span>
        ) : (
          <Link href="/locations">
            <a>X</a>
          </Link>
        )}
      </div>

      <div className={`${styles.imageGrid} ${showGrid ? styles.show : styles.hide}`}>
        <div className={styles.imageGridContainer}>
          {images.map((image, index) => (
            <div key={image._key} className={styles.imageContainer} onClick={() => show(index)}>
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

      <div className={`${styles.imageGalleryContainer} ${showSlider ? styles.show : styles.hide}`}>
        <div className={styles.imageSlider}>
          <ImageSliderContent
            translate={translate}
            transition={transition}
            width={60 * images.length}
          >
            {images.map((image, index) => (
              <>
                <ImageSlide
                  key={image + index}
                  content={builder.image(image).auto("format").url()}
                />
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
          <span onClick={hide} className={`${styles.infoThumbnails} ${styles.fakeLink}`}>
            Show Thumbnails
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationsImageGallery;
