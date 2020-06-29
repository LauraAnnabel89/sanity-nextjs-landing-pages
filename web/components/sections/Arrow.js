/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 0;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 100%;
      width: 50%;
      justify-content: center;
      cursor: ${direction === "left" ? "w-resize" : "e-resize"};
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        width: 100%;
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === "right" ? <div /> : <div />}
  </div>
);

export default Arrow;
