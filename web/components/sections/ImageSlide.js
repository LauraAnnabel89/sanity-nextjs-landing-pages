/** @jsx jsx */
// import React from 'react'
import {jsx} from '@emotion/core'
import styles from './ImageSlide.module.css'

const ImageSlide = ({content}) => (
  <div className={styles.root}>
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
