import React from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import { isString } from "lodash";
import styles from "./Video.module.css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const PLAYER_OPTIONS = {
  vimeo: {
    playerOptions: {
      byline: false,
      portrait: false,
      title: false,
      color: "ffffff",
    },
  },
};

export default class Video extends React.Component {
  state = {
    playing: false,
    started: false,
  };

  player = null;

  componentDidMount() {}

  ref = (player) => {
    this.player = player;
  };

  render() {
    const { poster, url, autoplay, muted, loop, ratio, windowed, caption } = this.props;
    const { playing, started } = this.state;
    if (!url) return null;

    console.log(this.props);
    if (autoplay) {
      PLAYER_OPTIONS.vimeo.playerOptions.background = true;
      PLAYER_OPTIONS.vimeo.playerOptions.autoplay = true;
      PLAYER_OPTIONS.vimeo.playerOptions.loop = true;
      PLAYER_OPTIONS.vimeo.playerOptions.controls = false;
      PLAYER_OPTIONS.vimeo.preload = true;
    }

    function urlFor(source) {
      return imageUrlBuilder(client).image(source);
    }

    const style = poster
      ? {
          background: `url("${urlFor(poster).width(2000).auto("format").url()}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      : {};

    return (
      <div className={windowed ? styles.windowContainer : styles.container} style={style}>
        <div className={windowed ? styles.windowWrapper : styles.wrapper}>
          <ReactPlayer
            url={url}
            ref={this.ref}
            autoPlay={autoplay}
            loop={loop || autoplay}
            muted={muted || autoplay}
            playing={playing}
            onEnded={this.onEnded}
            config={PLAYER_OPTIONS}
          />
          {windowed ? "" : <h1 className={styles.title}>{caption}</h1>}
        </div>
      </div>
    );
  }
}
