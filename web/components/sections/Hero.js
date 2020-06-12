import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import HeroFade from "./HeroFade";
import Cta from "../Cta";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function Hero(props) {
  const { heading, image, tagline, ctas, reverseColour } = props;

  console.log(props);
  const images = props.image;
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ color: reverseColour && "black" }}>
          {heading}
        </h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        <div>
          <HeroFade />
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
