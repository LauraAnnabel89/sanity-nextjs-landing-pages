import React, {useState} from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './VideoGrid.module.css'
import client from '../../client'

import Video from './Video'
import HamburgerMenu from 'react-hamburger-menu'

const builder = imageUrlBuilder(client)

function VideoGrid (props) {
  const {videos, limitGrid = 'responsive'} = props

  const [open, setOpen] = useState(false)

  if (videos.length === 0) {
    return null
  }

  const RenderVideo = (video) => <Video key={video._key} {...video} windowed />

  return (
    <div className={styles.root}>
      <div className={`${styles.content} ${styles[`grid-${limitGrid}`]}`}>
        {videos.map((video) => {
          const {_key, poster, caption} = video
          const imageUrl = builder.image(poster).auto('format').width(980).height(Math.ceil(980 / 16 * 9)).crop('entropy').fit('crop').url()
          return (
            <div
              key={_key}
              className={styles.videoParentContainer}
              onClick={() => {
                setOpen(video)
              }}
            >
              <div
                style={{backgroundImage: `url(${imageUrl})`}}
                className={styles.videoContainer}
              >
                <p className={styles.caption}>{caption}</p>
              </div>
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
                menuClicked={() => {}}
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
            <div className={styles.infoBar}>
              <p className={styles.infoCaption}>
                Moving Image / <span>{open.caption.toLowerCase()}</span>
              </p>
              <span onClick={() => { setOpen(null) }} className={`${styles.infoThumbnails} ${styles.fakeLink}`}>
                Show Thumbnails
              </span>
            </div>
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
