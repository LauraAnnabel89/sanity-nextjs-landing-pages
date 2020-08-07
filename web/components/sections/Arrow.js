/** @jsx jsx */
import React from 'react'
import {css, jsx} from '@emotion/core'
import InlineSVG from 'react-inlinesvg'
import styles from './Arrow.module.css'

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
    className={`${styles.root} slider-inner-arrow`}
    onClick={handleClick}
    css={css`
      ${direction === 'right' ? `right: 0` : `left: 0`};
      justify-content: ${direction === 'left' ? 'flex-start' : 'flex-end'};
      cursor: ${direction === 'left' ? 'w-resize' : 'e-resize'};

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
