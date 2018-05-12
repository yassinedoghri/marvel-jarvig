import { transitions } from "polished";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import media from "utils/media";

const bounceInAnimation = keyframes`${bounceIn}`;

const HintMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  padding: ${props => props.theme.spaces.lg}em;
  overflow-y: auto;
  background: ${props => props.theme.colors.foreground.base};
  color: ${props => props.theme.colors.contrastDark.primary};
  animation: 1s ${bounceInAnimation};
  display: ${props => (props.hidden ? "none" : "block")};
  ${transitions("all 200ms ease-in-out")};

  ${media.tablet`
      display: block;
  `};
`;

export default HintMessage;
