import React from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import { isString } from "lodash";
import styles from "./Video.module.css";

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
    playing: true,
    started: true,
  };

  player = null;

  componentDidMount() {}

  ref = (player) => {
    this.player = player;
  };

  render() {
    const { poster, url, autoplay, muted, loop, ratio } = this.props;
    const { playing, started } = this.state;
    if (!url) return null;

    if (autoplay) {
      PLAYER_OPTIONS.vimeo.playerOptions.background = true;
      PLAYER_OPTIONS.vimeo.playerOptions.autoplay = true;
      PLAYER_OPTIONS.vimeo.playerOptions.loop = true;
      PLAYER_OPTIONS.vimeo.playerOptions.controls = false;
      PLAYER_OPTIONS.vimeo.preload = true;
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
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
        </div>
      </div>
    );
  }
}
