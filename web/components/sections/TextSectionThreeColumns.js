import React from "react";
import PropTypes from "prop-types";
import SimpleBlockContent from "../SimpleBlockContent";
import styles from "./TextSection.module.css";

function ThreeColumnTextSection(props) {
  const {
    heading,
    label,
    text,
    headingColumnOne,
    headingColumnTwo,
    headingColumnThree,
    textColumnOne,
    textColumnTwo,
    textColumnThree,
  } = props;

  console.log(textColumnOne);

  console.log(headingColumnOne);
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.column}>
          <div className={styles.heading}>{headingColumnOne && <h1>{headingColumnOne}</h1>}</div>
          <div className={styles.copy}>
            {textColumnOne && <SimpleBlockContent blocks={textColumnOne} />}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>{headingColumnTwo && <h1>{headingColumnTwo}</h1>}</div>
          <div className={styles.copy}>
            {textColumnTwo && <SimpleBlockContent blocks={textColumnTwo} />}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>
            {headingColumnThree && <h1>{headingColumnThree}</h1>}
          </div>
          <div className={styles.copy}>
            {textColumnThree && <SimpleBlockContent blocks={textColumnThree} />}
          </div>
        </div>
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
