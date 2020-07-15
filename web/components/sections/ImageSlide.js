/** @jsx jsx */
// import React from 'react'
import {css, jsx} from '@emotion/core'

const ImageSlide = ({content}) => (
  <div
    css={css`
      height: 100%;
      width: 90vw;
      background-image: url('${content}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default ImageSlide
