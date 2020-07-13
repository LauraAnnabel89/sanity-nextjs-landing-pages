/** @jsx jsx */
// import React from 'react'
import {css, jsx} from '@emotion/core'

const ImageSlide = ({content}) => (
  <div
    css={css`
      height: 100%;
      width: 80em;
      background-image: url('${content}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default ImageSlide
