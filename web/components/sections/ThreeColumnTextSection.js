import React from "react";
import PropTypes from "prop-types";
import SimpleBlockContent from "../SimpleBlockContent";
import styles from "./TextSection.module.css";

function ThreeColumnTextSection(props) {
  const {
    headingColumnOne,
    headingColumnTwo,
    headingColumnThree,
    textColumnOne,
    textColumnTwo,
    textColumnThree,
    heading,
    label,
    text,
  } = props;

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        {label && <div className={styles.label}>{label}</div>}
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {text && <SimpleBlockContent blocks={text} />}
        <p>{headingColumnOne}</p>
        <p>{headingColumnTwo}</p>
        <p>{headingColumnThree}</p>
        <p>{textColumnOne}</p>
        <p>{textColumnTwo}</p>
        <p>{textColumnThree}</p>
      </section>
    </div>
  );
}

ThreeColumnTextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
};

export default ThreeColumnTextSection;
