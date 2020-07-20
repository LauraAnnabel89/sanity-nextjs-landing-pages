import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageGrid.module.css'
import client from '../../client'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

function ImageGrid (props) {
  const {image, limitGrid} = props

  const images = props.image

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={`${styles.content} ${`grid-${limitGrid || 'responsive'}`}`}>
        {images.map((item) => {
          const {internalLink, _key, caption} = item

          const RenderItem = () => (
            <div key={`${_key}-image`} className={styles.imageContainer}>
              <img
                src={builder.image(item).auto('format').width(900).url()}
                className={styles.image}
                alt={caption}
              />
              <p className={styles.caption}>{caption}</p>
            </div>
          )

          if (internalLink && internalLink.resolved) {
            const {resolved} = internalLink
            const {slug} = resolved

            return (
              <Link key={_key} href={{pathname: `/${slug.current}`}} as={`/${slug.current}`}>
                <a>{RenderItem()}</a>
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
