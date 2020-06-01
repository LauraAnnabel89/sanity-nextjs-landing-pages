import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function FullBleedImage(props) {
  const { heading, backgroundImage, tagline, ctas } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
      }
    : {};

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
          </div>

      </div>
   
  );
}

FullBleedImage.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default FullBleedImage;
