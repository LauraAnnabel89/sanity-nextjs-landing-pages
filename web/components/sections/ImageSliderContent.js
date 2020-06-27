import React from "react";
import styled from "@emotion/styled";

const ImageSliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}em);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}em;
  display: flex;
`;
export default ImageSliderContent;
