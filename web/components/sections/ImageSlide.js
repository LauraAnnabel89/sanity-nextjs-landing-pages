/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const ImageSlide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 60em;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  ></div>
);

export default ImageSlide;
