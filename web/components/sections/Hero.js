import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css?raw";
// import "slick-carousel/slick/slick-theme.css?raw";

const builder = imageUrlBuilder(client);

function Hero(props) {
  const { heading, image, tagline, ctas } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = props.image;
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        <div>
          {images.map((image) => (
            <>
              <img
                className={styles.image}
                src={builder.image(image).url()}
                className={styles.image}
                alt={heading}
              />
            </>
          ))}
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
