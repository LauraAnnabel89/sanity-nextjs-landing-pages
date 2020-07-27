import React from 'react'
import ImageGallery from './ImageGallery'

const StillsImageGallery = (props) => {
  const {image, page} = props
  const images = image
  return (
    <ImageGallery images={images} back={'/stills'} name={page.title} title='Stills' />
  )
}

export default StillsImageGallery
