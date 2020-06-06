import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./ImageGrid.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

const builder = imageUrlBuilder(client);

function ImageGrid(props) {
  const { title, image, link } = props;

  const images = props.image;

  if (!image) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {images.map((image) => (
          <a href={link}>
            <figure className={styles.imageContainer}>
              <img
                src={builder.image(image).auto("format").width(2000).url()}
                className={styles.image}
                alt={title}
              />
            </figure>
            <p>{title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

ImageGrid.propTypes = {
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

export default ImageGrid;