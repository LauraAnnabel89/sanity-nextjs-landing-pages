/** @jsx jsx */
import React from 'react'
import {css, jsx} from '@emotion/core'
import InlineSVG from 'react-inlinesvg'

const Icon = ({direction}) => (
  <div
    css={css`
      transform: rotateZ(${direction === 'right' ? '-90' : '90'}deg);
    `}
  >
    <InlineSVG src='/static/images/chevron.svg' />
  </div>
)

const Arrow = ({direction, handleClick}) => (
  <div
    className='slider-inner-arrow'
    onClick={handleClick}
    css={css`
      display: flex;
      position: fixed;
      top: 0;
      ${direction === 'right' ? `right: 0` : `left: 0`};
      height: 100%;
      width: 50%;
      justify-content: ${direction === 'left' ? 'flex-start' : 'flex-end'};
      cursor: ${direction === 'left' ? 'w-resize' : 'e-resize'};
      align-items: center;
      transition: transform ease-in 0.1s;
      z-index: 1000;
      svg {
        width: 1.5rem;
        transform: translateX(${direction === 'left' ? '' : ''}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    <Icon direction={direction} />
  </div>
)

export default Arrow
