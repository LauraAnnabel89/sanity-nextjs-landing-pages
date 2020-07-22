/** @jsx jsx */
// import React from 'react'
import {jsx} from '@emotion/core'

const ImageSlide = ({content}) => (
  <div
    style={{
      height: '100%',
      width: '100vw',
      padding: '2.5rem'
    }}
  >
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${content})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    />
  </div>
)

export default ImageSlide
