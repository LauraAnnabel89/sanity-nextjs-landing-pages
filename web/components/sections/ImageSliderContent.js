import React from "react";
import styled from "@emotion/styled";

const ImageSliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}em);
  height: 100%;
  width: ${(props) => props.width}em;
  display: flex;
`;
export default ImageSliderContent;
