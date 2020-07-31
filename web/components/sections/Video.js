import React from 'react'
import ReactPlayer from 'react-player'
import styles from './Video.module.css'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

export default class Video extends React.Component {
  state = {
    playing: false,
    started: false
  };

  player = null;

  ref = (player) => {
    this.player = player
  };

  render () {
    const {poster, url, autoplay = false, windowed, caption} = this.props
    const {playing} = this.state
    if (!url) return null

    const PLAYER_OPTIONS = {
      vimeo: {
        playerOptions: {
          byline: 0,
          portrait: 0,
          title: 0,
          color: '#ffffff',
          background: 0,
          autoplay: 0,
          loop: 0,
          controls: true,
          preload: true,
          volume: 1
        }
      }
    }

    if (autoplay === true) {
      PLAYER_OPTIONS.vimeo.playerOptions.background = 1
      PLAYER_OPTIONS.vimeo.playerOptions.autoplay = 1
      PLAYER_OPTIONS.vimeo.playerOptions.loop = 1
      PLAYER_OPTIONS.vimeo.playerOptions.controls = 0
      PLAYER_OPTIONS.vimeo.preload = 1
      PLAYER_OPTIONS.vimeo.false = 1
      PLAYER_OPTIONS.vimeo.playsinline = 1
    }

    function urlFor (source) {
      return imageUrlBuilder(client).image(source)
    }

    const style = poster
      ? {
        background: `url("${urlFor(poster).width(1980).auto('format').url()}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
      }
      : {}

    const Play = () => (
      <div style={style} className={styles.playButtonContainer} onClick={() => { this.setState({playing: true}) }}>
        <div className={styles.playButton} />
      </div>
    )

    return (
      <div className={windowed ? styles.windowContainer : styles.container} style={!playing && !windowed ? style : {}}>
        <div className={windowed ? styles.windowWrapper : styles.wrapper}>
          <ReactPlayer
            url={url}
            ref={this.ref}
            autoPlay={autoplay}
            loop={autoplay}
            muted={autoplay}
            playing={playing}
            onEnded={this.onEnded}
            config={PLAYER_OPTIONS}
            width='100%'
            height='100%'
            playsinline={autoplay}
            style={{visibility: `${windowed && !playing ? 'hidden' : 'visible'}`}}
          />
          {windowed && caption ? '' : <h1 className={styles.title}>{caption}</h1>}
          {windowed && !playing ? <Play /> : null}
        </div>
      </div>
    )
  }
}
