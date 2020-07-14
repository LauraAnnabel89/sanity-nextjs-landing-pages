import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './TwoColumnWithText.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function TwoColumnWithText (props) {
  const {heading, label, text, image, reverseOrder} = props

  if (!image) {
    return null
  }

  console.log(props)

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.imageContainer} style={{order: reverseOrder && '2'}}>
          <img
            src={builder.image(props.image).auto('format').width(980).url()}
            className={styles.image}
            alt={props.heading}
          />
        </div>
        <section className={styles.article}>
          {label && <div className={styles.label}>{props.label}</div>}
          {heading && <h2 className={styles.heading}>{props.heading}</h2>}
          {text && <SimpleBlockContent blocks={props.text} />}
        </section>
      </div>
    </div>
  )
}

TwoColumnWithText.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default TwoColumnWithText
