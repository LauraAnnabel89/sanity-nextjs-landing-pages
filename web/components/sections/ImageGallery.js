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
import ReactSwipe from 'react-swipe'

const builder = imageUrlBuilder(client)

const ImageGallery = (props) => {
  const {images, name} = props
  const router = useRouter()

  const [base] = router.query.slug.split('/')

  let reactSwipeEl

  const returnHash = router.query.slug.replace('/', '-')
  const returnUrl = `/${base}#${returnHash}`

  const [activeSlide, setActiveSlide] = useState(0)
  const [showSlider, setShowSlider] = useState(true)
  const [showGrid, setShowGrid] = useState(false)

  const nextSlide = () => {
    reactSwipeEl.next()
  }

  const prevSlide = () => {
    reactSwipeEl.prev()
  }

  const slideCallback = () => {
    const index = reactSwipeEl.getPos()
    setActiveSlide(index)
  }

  const show = (index, caption) => {
    reactSwipeEl.slide(index, 0)
    setShowGrid(false)
    setShowSlider(true)
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
            href={{
              pathname: '/LandingPage',
              query: {slug: base}
            }}
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
              <div className={styles.imageContainerInner}>
                <img draggable={false} onDragStart={() => false}
                  src={builder.image(image).auto('format').width(480).url()}
                  className={styles.image}
                  alt={image.caption}
                  key={index}
                  loading='lazy'
                />
                <p className={styles.caption}>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.imageGalleryContainer} ${showSlider ? styles.show : styles.hide}`}>
        <div className={styles.imageSlider}>
          <ReactSwipe
            className='carousel'
            swipeOptions={{
              startSlide: activeSlide,
              continuous: true,
              transitionEnd: slideCallback
            }}
            ref={el => (reactSwipeEl = el)}
          >
            {images.map((image, index, caption) => (
              <div key={image + index}>
                <ImageSlide content={builder.image(image).auto('format').width(2000).url()} />
              </div>
            ))}
          </ReactSwipe>
          <Arrow direction='left' handleClick={prevSlide} />
          <Arrow direction='right' handleClick={nextSlide} />
        </div>
      </div>

      <div className={`${styles.infoBar} ${showSlider ? styles.show : styles.hide}`}>
        <p className={styles.infoCaption}>
          {name} / <span>{activeSlide + 1} of {images.length} {images[activeSlide].slug} {images[activeSlide].caption}</span>
        </p>
        <span onClick={hide} className={`${styles.infoThumbnails} ${styles.fakeLink}`}>
          Show Thumbnails
        </span>
      </div>
    </div>
  )
}

export default ImageGallery
