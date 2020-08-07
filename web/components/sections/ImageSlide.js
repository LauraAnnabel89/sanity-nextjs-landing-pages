/** @jsx jsx */
// import React from 'react'
import {jsx} from '@emotion/core'
import styles from './ImageSlide.module.css'

const ImageSlide = ({content}) => (
  <div className={styles.root}>
    <div
      style={{
        backgroundImage: `url(${content})`
      }}
    />
  </div>
)

export default ImageSlide
