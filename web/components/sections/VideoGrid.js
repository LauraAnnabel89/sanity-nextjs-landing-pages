import React, {useState} from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './VideoGrid.module.css'
import client from '../../client'

import Video from './Video'
import HamburgerMenu from 'react-hamburger-menu'

const builder = imageUrlBuilder(client)

function VideoGrid (props) {
  const {videos} = props

  const [open, setOpen] = useState(false)

  if (videos.length === 0) {
    return null
  }

  const RenderVideo = (video) => <Video key={video._key} windowed {...video} />

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {videos.map((video) => {
          const {_key, poster, caption} = video
          const imageUrl = builder.image(poster).auto('format').width(980).url()
          return (
            <div
              key={_key}
              style={{backgroundImage: `url(${imageUrl})`}}
              className={styles.videoContainer}
              onClick={() => {
                setOpen(video)
              }}
            >
              <p className={styles.caption}>{caption}</p>
            </div>
          )
        })}
      </div>

      {
        open ? (
          <div
            className={styles.modal}
          >
            <div
              className={styles.modalClose}
              onClick={() => {
                setOpen(null)
              }}
            >
              <HamburgerMenu
                isOpen={open}
                menuClicked={null}
                width={30}
                height={25}
                strokeWidth={2}
                rotate={0}
                color={'black'}
                borderRadius={1}
                animationDuration={0.25}
              />
            </div>
            {RenderVideo(open)}
          </div>
        ) : null
      }
    </div>
  )
}

VideoGrid.propTypes = {
  videos: PropTypes.array
}

export default VideoGrid
