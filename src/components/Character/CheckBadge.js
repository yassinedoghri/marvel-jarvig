import styled, { keyframes } from "styled-components";
import { transitions } from "polished/lib/index";

import { bounceIn, tada } from "react-animations";

const bounceInAnimation = keyframes`${bounceIn}`;
const tadaAnimation = keyframes`${tada}`;

const CheckBadge = styled.div`
    position: absolute;
    display: ${props => (props.answer !== "none" ? "block" : "none")};
    width: auto;
    top: -.3em;
    right: -.3em;
    text-align: center;
    background: ${props => {
      if (props.answer === "correct") return props.theme.colors.accent2.base;
      if (props.answer === "incorrect") return props.theme.colors.primary.base;
      return props.theme.colors.foreground.base;
    }};
    color: ${props => props.theme.colors.dark.primary};
    padding: .1em .2em;
    box-sizing: border-box;
    border: solid ${props => {
      if (props.answer === "correct") return props.theme.colors.accent2.base;
      if (props.answer === "incorrect") return props.theme.colors.primary.base;
      return props.theme.colors.foreground.base;
    }};
    border-width: 2px 2px 3px 3px;
    border-radius: 30px;
    transform: rotate(2deg);
    ${transitions("all 200ms ease-in-out")};
    animation: 1s ${bounceInAnimation}, 1s ${tadaAnimation} 2s;
    font-size: ${props => props.theme.fontSize.lg}
    z-index: 10;
`;

export default CheckBadge;
