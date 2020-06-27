import React, {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function Hero (props) {
  const {heading, image, tagline, ctas, reverseColour, key} = props
  const images = props.image

  const slidePresentationTime = 5000
  const [currentSlide, setCurrentSlide] = useState(0) // set currrent slide index
  const sliderInterval = useRef() // interval ref

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length) // change current slide to next after 3s
    }, slidePresentationTime)

    return () => {
      clearInterval(sliderInterval)
    }
  })

  return (
    <div key={key} className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{color: reverseColour && 'black'}}>
          {heading}
        </h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        <div>
          {images.length > 1
            ? images.map((image, index) => (
              <img
                id={index}
                src={builder.image(image).url()}
                alt={heading}
                key={index}
                className={index === currentSlide ? styles.activeImage : styles.image}
                style={{
                  zIndex: `-${index + 1}`
                }}
              />
            ))
            : images.map((image, index) => (
              <>
                <img
                  id={index}
                  key={index}
                  className={styles.staticImage}
                  src={builder.image(image).url()}
                  alt={heading}
                />
              </>
            ))}
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object)
}

export default Hero
