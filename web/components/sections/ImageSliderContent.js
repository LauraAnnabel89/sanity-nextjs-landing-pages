import React from 'react'
import styles from './ImageSliderContent.module.css'

const ImageSliderContent = (props) => (
  <div
    className={styles.root}
    style={{
      transform: `translateX(-${props.translate}vw)`,
      width: `${props.width}vw`
    }}
  >
    {props.children || null}
  </div>
)

export default ImageSliderContent
