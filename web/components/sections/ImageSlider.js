/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import ImageSliderContent from "./ImageSliderContent";

/**
 * @function Slider
 */
const ImageSlider = () => {
  const isWindowContext = typeof window !== "undefined";
  const getWindow = isWindowContext && window.location.search;
  const getWidth = () => getWindow.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <div css={ImageSliderCSS}>
      <ImageSliderContent translate={translate} transition={transition} width={getWidth()}>
        {/* */}
      </ImageSliderContent>
    </div>
  );
};

const ImageSliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export default ImageSlider;
