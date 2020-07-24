import React from 'react'
import ImageGallery from './ImageGallery'

const LocationsImageGallery = (props) => {
  const {name, image} = props
  const images = image

  return (
    <ImageGallery images={images} back={'/locations'} name={name} title='Locations' />
  )
}

export default LocationsImageGallery
