import React, { useState } from "react";
import PropTypes from "prop-types";
import Carousel, { Modal, ModalGateway } from "react-images";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./VideoGrid.module.css";
import client from "../../client";

import Video from "./Video";

const builder = imageUrlBuilder(client);

function VideoGrid(props) {
  const { videos } = props;

  const [open, setOpen] = useState(false);

  if (videos.length === 0) {
    return null;
  }

  const View = (viewProps) => {
    const { data } = viewProps;
    return <Video key={data._key} windowed {...data} />;
  };

  const carouselComponents = {
    Footer: null,
    View,
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {videos.map((video, index) => {
          const { _key, poster, caption } = video;
          const imageUrl = builder.image(poster).auto("format").width(2000).url();
          return (
            <div
              key={_key}
              style={{ backgroundImage: `url(${imageUrl})` }}
              className={styles.videoContainer}
              onClick={() => {
                setOpen(index);
              }}
            >
              <p className={styles.caption}>{caption}</p>
            </div>
          );
        })}
      </div>

      <ModalGateway>
        {Number.isInteger(open) ? (
          <Modal
            styles={{ backgroundColor: "red" }}
            closeOnBackdropClick
            allowFullscreen={true}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Carousel currentIndex={open} components={carouselComponents} views={videos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

VideoGrid.propTypes = {
  videos: PropTypes.array,
};

export default VideoGrid;
