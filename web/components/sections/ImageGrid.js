import React, {useState} from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageGrid.module.css'
import client from '../../client'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

function ImageGrid (props) {
  const NUM_ITEMS = 20

  const {image, limitGrid = 'responsive', pages} = props
  const [visible, setVisible] = useState(NUM_ITEMS)

  if (pages && pages.length > 0) {
    return (
      <div className={styles.root}>
        <div className={`${styles.content} ${styles[`grid-${limitGrid}`]}`}>
          {pages.map((item, index) => {
            if (index >= visible) {
              return null
            }

            const {slug, title, openGraphImage, _key} = item

            const RenderItem = () => (
              <div key={`${_key}-image`} className={styles.imageContainer}>
                <img draggable={false} onDragStart={() => false}
                  src={builder.image(openGraphImage).auto('format').width(980).height(Math.ceil(980 / 16 * 9)).crop('entropy').fit('crop').url()}
                  className={styles.image}
                  alt={title}
                  loading='lazy'
                />
                <p className={styles.caption}>{title}</p>
              </div>
            )

            return (
              <Link
                key={_key}
                href={{
                  pathname: '/StillsPage',
                  query: {slug: slug.current}
                }}
                as={`/${slug.current}`}
                prefetch={false}
              >
                <a id={slug.current.replace('/', '-')}>{RenderItem()}</a>
              </Link>
            )
          })}
        </div>
        {
          visible < pages.length ? (
            <div className={`${styles.buttonContainer} ${styles[`grid-${limitGrid}`]}`}>
              <button className={styles.button} onClick={() => { setVisible(visible + NUM_ITEMS) }}>Load more work</button>
            </div>
          ) : null
        }
      </div>
    )
  }

  const images = props.image

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={`${styles.content} ${styles[`grid-${limitGrid}`]}`}>
        {images.map((item) => {
          const {internalLink, _key, caption} = item

          const RenderItem = () => (
            <div key={`${_key}-image`} className={styles.imageContainer}>
              <img draggable={false} onDragStart={() => false}
                src={builder.image(item).auto('format').width(980).height(Math.ceil(980 / 16 * 9)).url()}
                className={styles.image}
                alt={caption}
                loading='lazy'
              />
              <p className={styles.caption}>{caption}</p>
            </div>
          )

          if (internalLink && internalLink.resolved) {
            const {resolved} = internalLink
            const {slug} = resolved

            return (
              <Link
                key={_key}
                href={{
                  pathname: '/[...slug]',
                  query: {slug: slug.current}
                }}
                as={`/${slug.current}`}
                prefetch={false}
              >
                <a id={slug.current.replace('/', '-')}>{RenderItem()}</a>
              </Link>
            )
          }

          return RenderItem()
        })}
      </div>
    </div>
  )
}

ImageGrid.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  images: PropTypes.object,
  text: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default ImageGrid
