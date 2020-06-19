/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 20px;
      width: 20px;
      justify-content: center;
      cursor: pointer;
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
    {direction === "right" ? (
      <img src="static/images/rightarrow.png" />
    ) : (
      <img src="static/images/leftarrow.png" />
    )}
  </div>
);

export default Arrow;
