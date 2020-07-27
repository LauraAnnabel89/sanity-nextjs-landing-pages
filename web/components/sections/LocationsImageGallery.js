import React from 'react'
import ImageGallery from './ImageGallery'

const LocationsImageGallery = (props) => {
  const {name, image, page} = props
  const images = image

  return (
    <ImageGallery images={images} back={'/locations'} name={name || page.title.toLowerCase()} title='Locations' />
  )
}

export default LocationsImageGallery
