import React from 'react'
import ImageGallery from './ImageGallery'

const LocationsImageGallery = (props) => {
  const images = props.image

  return (
    <ImageGallery images={images} back={'/locations'} />
  )
}

export default LocationsImageGallery
