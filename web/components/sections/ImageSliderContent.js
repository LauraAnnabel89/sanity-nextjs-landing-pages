import React from 'react';

const ImageSliderContent = (props) => (
  <div
    style={{
      transform: `translateX(-${props.translate}vw)`,
      height: `100%`,
      width: `${props.width}vw`,
      display: 'flex'
    }}
  >
    {props.children || null}
  </div>
)

export default ImageSliderContent
