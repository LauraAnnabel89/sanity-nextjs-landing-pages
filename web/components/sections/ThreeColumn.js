import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ThreeColumn.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ThreeColumn (props) {
  const {heading, label, text, image, cta} = props

  const images = props.image

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {images.map((image) => (
          <figure className={styles.imageContainer}>
            <img draggable={false} onDragStart={() => false}
              src={builder.image(image).auto('format').width(980).url()}
              className={styles.image}
              alt={heading}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

ThreeColumn.propTypes = {
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

export default ThreeColumn
