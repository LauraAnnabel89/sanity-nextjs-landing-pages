import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./ImageGrid.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function ImageGrid(props) {
  const { caption, image, internalLink } = props;

  const images = props.image;

  if (!image) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {images.map((image) => (
          <>
            {console.log(image)}
            <Link
              href={{
                query: { slug: internalLink },
              }}
              as={`/${internalLink}`}
              prefetch
            >
              <figure className={styles.imageContainer}>
                <img
                  src={builder.image(image).auto("format").width(2000).url()}
                  className={styles.image}
                  alt={image.caption}
                />
                <p className={styles.caption}>{image.caption}</p>
              </figure>
            </Link>
          </>
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
