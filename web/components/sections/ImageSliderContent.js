import styled from '@emotion/styled'

const ImageSliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}vw);
  height: 100%;
  width: ${(props) => props.width}vw;
  display: flex;
`
export default ImageSliderContent
