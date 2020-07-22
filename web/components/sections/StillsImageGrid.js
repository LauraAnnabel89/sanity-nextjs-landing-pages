import React from 'react'
import PropTypes from 'prop-types'
import ImageGrid from './ImageGrid'

function StillsImageGrid (props) {
  const {image, limitGrid = 'responsive'} = props

  if (!image) {
    return null
  }

  return (
    <ImageGrid image={image} limitGrid={limitGrid} />
  )
}

StillsImageGrid.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  images: PropTypes.object,
  text: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default StillsImageGrid
