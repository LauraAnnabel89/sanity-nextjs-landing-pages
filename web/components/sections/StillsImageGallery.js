import React from 'react'
import ImageGallery from './ImageGallery'

const StillsImageGallery = (props) => {
  const images = props.image

  return (
    <ImageGallery images={images} back={'/stills'} />
  )
}

export default StillsImageGallery
