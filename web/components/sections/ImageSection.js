import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'

const builder = imageUrlBuilder(client)

function ImageSection (props) {
  const {image} = props

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        <img draggable={false} onDragStart={() => false}
          src={builder.image(image).auto('format').width(1980).url()}
          className={styles.image}
          alt={image.caption}
          loading='lazy'
        />
        <h1 className={styles.imageCaption}>{image.caption}</h1>
      </figure>
    </div>
  )
}

ImageSection.propTypes = {
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

export default ImageSection
