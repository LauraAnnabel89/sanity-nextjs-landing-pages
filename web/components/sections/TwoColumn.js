import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./TwoColumn.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

const builder = imageUrlBuilder(client);

function ImageSection(props) {
  const { heading, label, text, image, cta } = props;

  const images = props.image;

  if (!image) {
    return null;
  }

  console.log(images);

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        {images.map((image) => (
          <img
            src={builder.image(image).auto("format").width(2000).url()}
            className={styles.image}
            alt={heading}
          />
        ))}
      </figure>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
