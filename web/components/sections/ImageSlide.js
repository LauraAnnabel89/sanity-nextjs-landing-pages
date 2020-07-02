/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const ImageSlide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 80em;
      background-image: url('${content}');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
    `}
  ></div>
);

export default ImageSlide;
