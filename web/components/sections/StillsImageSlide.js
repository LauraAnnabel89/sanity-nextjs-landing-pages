/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const StillsImageSlide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 80em;
      background-image: url('${content}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    `}
  ></div>
);

export default StillsImageSlide;
