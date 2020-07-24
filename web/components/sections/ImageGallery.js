import React, {useState} from 'react'
import ImageSliderContent from './ImageSliderContent'
import styles from './ImageGallery.module.css'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'
import {useRouter} from 'next/router'

const builder = imageUrlBuilder(client)

const ImageGallery = (props) => {
  const {images, back, name} = props
  const router = useRouter()

  const returnHash = router.query.slug.replace('/', '-')
  const returnUrl = `${back}#${returnHash}`

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeSlide: 0
  })

  const [showSlider, setShowSlider] = useState(true)
  const [showGrid, setShowGrid] = useState(false)

  const {translate, transition, activeSlide} = state

  const nextSlide = () => {
    if (activeSlide === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0
      })
    }

    setState((state) => ({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * 100
    }))
  }

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * 100,
        activeSlide: images.length - 1
      })
    }

    setState((state) => ({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * 100
    }))
  }

  const show = (index, caption) => {
    setShowGrid(false)
    setShowSlider(true)
    setState({
      ...state,
      activeSlide: index,
      translate: index * 100
    })
  }

  const hide = () => {
    setShowSlider(false)
    setShowGrid(true)
  }

  return (
    <div className={`${styles.root} ${showGrid ? styles.pageRelative : styles.pageFixed}`}>
      <div className={styles.header}>
        {showGrid ? (
          <HamburgerMenu
            isOpen
            menuClicked={() => {
              show(activeSlide)
            }}
            width={30}
            height={25}
            strokeWidth={2}
            rotate={0}
            color={'black'}
            borderRadius={1}
            animationDuration={0.25}
          />
        ) : (
          <Link
            href={returnUrl}
            as={returnUrl}
          >
            <a>
              <HamburgerMenu
                isOpen
                menuClicked={() => {}}
                width={30}
                height={25}
                strokeWidth={2}
                rotate={0}
                color={'black'}
                borderRadius={1}
                animationDuration={0.25}
              />
            </a>
          </Link>
        )}
      </div>

      <div className={`${styles.imageGrid} ${showGrid ? styles.show : styles.hide}`}>
        <div className={styles.imageGridContainer}>
          {images.map((image, index) => (
            <div key={image._key} className={styles.imageContainer} onClick={() => show(index)}>
              <img
                src={builder.image(image).auto('format').width(480).url()}
                className={styles.image}
                alt={image.caption}
                key={index}
                loading='lazy'
              />
              <p className={styles.caption}>{image.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.imageGalleryContainer} ${showSlider ? styles.show : styles.hide}`}>
        <div className={styles.imageSlider}>
          <ImageSliderContent
            translate={translate}
            transition={transition}
            width={100 * images.length}
          >
            {images.map((image, index, caption) => (
              <ImageSlide key={image + index} content={builder.image(image).auto('format').width(2000).url()} />
            ))}
          </ImageSliderContent>
          <Arrow direction='left' handleClick={prevSlide} />
          <Arrow direction='right' handleClick={nextSlide} />
        </div>
      </div>

      <div className={`${styles.infoBar} ${showSlider ? styles.show : styles.hide}`}>
        <p className={styles.infoCaption}>
          Locations / <span>{activeSlide + 1} of {images.length} {images[activeSlide].slug} {name} {images[activeSlide].caption}</span>
        </p>
        <span onClick={hide} className={`${styles.infoThumbnails} ${styles.fakeLink}`}>
          Show Thumbnails
        </span>
      </div>
    </div>
  )
}

export default ImageGallery
