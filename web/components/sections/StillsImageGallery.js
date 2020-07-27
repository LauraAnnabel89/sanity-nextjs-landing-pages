import React from 'react'
import ImageGallery from './ImageGallery'

const StillsImageGallery = (props) => {
  const {image, name, page} = props
  const images = image
  return (
    <ImageGallery images={images} back={'/stills'} name={name || page.title.toLowerCase()} title='Stills' />
  )
}

export default StillsImageGallery
