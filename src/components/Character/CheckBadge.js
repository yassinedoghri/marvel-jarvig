import { transitions } from "polished/lib/index";

import { bounceIn, tada } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceInAnimation = keyframes`${bounceIn}`;
const tadaAnimation = keyframes`${tada}`;

const CheckBadge = styled.div`
  position: absolute;
  display: ${props => (props.answer !== "none" ? "block" : "none")};
  width: auto;
  top: 0;
  right: 0;
  text-align: center;
  color: ${props => props.theme.colors.contrastDark.primary};
  padding: 0.1em 0.2em;
  border-width: 2px 2px 3px 3px;
  border-radius: 30px;
  transform: rotate(2deg);
  animation: 1s ${bounceInAnimation}, 1s ${tadaAnimation} 2s;
  font-size: ${props => props.theme.fontSize.xl}rem;
  z-index: 1;
  ${transitions("all 200ms ease-in-out")};
`;

export default CheckBadge;
