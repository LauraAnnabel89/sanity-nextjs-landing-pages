import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSectionThreeColumns.module.css'

function ThreeColumnTextSection (props) {
  const {
    heading,
    label,
    text,
    headingColumnOne,
    headingColumnTwo,
    headingColumnThree,
    textColumnOne,
    textColumnTwo,
    textColumnThree
  } = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.column}>
          <div className={styles.heading}>
            {headingColumnOne && <h3>{headingColumnOne}</h3>}
          </div>
          <div className={styles.copy}>
            {textColumnOne && <SimpleBlockContent blocks={textColumnOne} />}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>
            {headingColumnTwo && <h3>{headingColumnTwo}</h3>}
          </div>
          <div className={styles.copy}>
            {textColumnTwo && <SimpleBlockContent blocks={textColumnTwo} />}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>
            {headingColumnThree && <h3>{headingColumnThree}</h3>}
          </div>
          <div className={styles.copy}>
            {textColumnThree && <SimpleBlockContent blocks={textColumnThree} />}
          </div>
        </div>
      </section>
    </div>
  )
}

ThreeColumnTextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object)
}

export default ThreeColumnTextSection
