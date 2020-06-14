import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./ImageSlider.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import Slider from "react-slick";

const builder = imageUrlBuilder(client);

function ImageSlider(props) {
  const { caption, image, internalLink } = props;

  const images = props.image;

  if (!image) {
    return null;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        THIS WILL BE A SLIDER
        <Slider {...settings}>
          {images.map((image) => (
            <div>
              <figure className={styles.imageContainer}>
                <a href={image.internalLink}>
                  <img
                    src={builder.image(image).auto("format").width(2000).url()}
                    className={styles.image}
                    alt={image.caption}
                  />
                  <p className={styles.caption}>{image.caption}</p>
                </a>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
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

export default ImageSlider;
