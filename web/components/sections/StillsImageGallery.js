import React from 'react'
import ImageGallery from './ImageGallery'

const StillsImageGallery = (props) => {
  const {image, name} = props
  const images = image

  return (
    <ImageGallery images={images} back={'/stills'} name={name} title='Stills' />
  )
}

export default StillsImageGallery
