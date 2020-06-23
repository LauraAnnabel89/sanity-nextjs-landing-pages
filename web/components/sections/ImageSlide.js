/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const ImageSlide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
      background-image: url('${content}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 20% 100%;
    `}
  ></div>
);

export default ImageSlide;
