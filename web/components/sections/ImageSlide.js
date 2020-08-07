/** @jsx jsx */
import React, {useState, useEffect} from 'react'
import {jsx} from '@emotion/core'
import styles from './ImageSlide.module.css'

const ImageSlide = ({content}) => {
  const [height, setHeight] = useState('100vh')

  if (typeof window !== 'undefined') {
    useEffect(() => {
      setHeight(window.innerHeight)
    }, [setHeight])

    const onResize = () => {
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', onResize, false)
    window.addEventListener('orientationchange', onResize, false)
  }

  return (
    <div
      className={styles.root}
      style={{
        height
      }}
    >
      <div
        style={{
          backgroundImage: `url(${content})`
        }}
      />
    </div>
  )
}

export default ImageSlide
