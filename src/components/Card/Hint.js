import { transitions } from "polished";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import media from "utils/media";

const bounceInAnimation = keyframes`${bounceIn}`;

const Hint = styled.button`
  position: absolute;
  top: -1.2em;
  right: -1em;
  padding: 0.5em 0.6em;
  font-weight: bold;
  background: ${props => props.theme.colors.accent.base};
  color: ${props => props.theme.colors.contrastLight.primary};
  border: solid ${props => props.theme.colors.foreground.base};
  border-width: 3px 4px 5px 3px;
  border-radius: 25px;
  transform: rotate(10deg);
  animation: 1s ${bounceInAnimation};
  ${transitions("all 200ms ease-in-out")};
  z-index: 1;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.accent.light};
  }

  &:active {
    background: ${props => props.theme.colors.accent.dark};
  }

  ${media.tablet`
        display: block;
    `};
`;

export default Hint;
