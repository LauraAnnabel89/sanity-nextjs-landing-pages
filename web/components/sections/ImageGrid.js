import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageGrid.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import Link from 'next/link'
import {useRouter} from 'next/router'

const builder = imageUrlBuilder(client)

function ImageGrid (props) {
  const {image} = props

  const router = useRouter()

  const images = props.image

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {images.map((item) => {
          const {internalLink, _key, caption} = item

          const RenderItem = () => (
            <div key={`${_key}-image`} className={styles.imageContainer}>
              <img
                src={builder.image(item).auto('format').width(2000).url()}
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
              <Link
                href={{pathname: `/locations/${slug.current}`}}
                as={`locations/${slug.current}`}
              >
                <a>
                  {RenderItem()}
                </a>
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
