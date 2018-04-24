import styled from "styled-components";
import { backgroundImages } from "polished";
import ComicLines from "./comic-lines.svg";
import ComicDots from "./comic-dots.svg";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  ${props =>
    backgroundImages(
      `url(${ComicLines}), url(${ComicDots}),radial-gradient(${
        props.theme.colors.accent.base
      } 0%,${props.theme.colors.primary.base} 80%)`
    )} background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default FlexWrapper;
