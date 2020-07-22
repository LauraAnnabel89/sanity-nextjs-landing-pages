import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./HeroSingle.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function HeroSingle(props) {
  const { heading, backgroundImage, tagline, ctas, reverseColour } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(1980).auto("format").url()}")`,
        backgroundSize: "cover",
      }
    : {};

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ color: reverseColour && "black" }}>
          {heading}
        </h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

HeroSingle.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default HeroSingle;
