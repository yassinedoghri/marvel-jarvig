import styled from "styled-components";
import media from "media";

export const FlexAside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2em 2em 2em;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;

  ${media.tablet`
        width: 30em;
        padding: 0;
        position: relative;
    `};
  ${media.desktop`
        width: 20%;
    `};
  ${media.giant`
        width: 40%;
    `};
`;

export default FlexAside;
