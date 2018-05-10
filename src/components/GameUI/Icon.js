import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`${pulse}`;

const Icon = styled.span`
  color: ${props => props.theme.colors.contrastDark.primary};
  padding-left: 0.6em;
  padding-right: 0.3em;
  font-size: 1.8rem;

  & svg {
    animation: ${props =>
      props.animated ? `1s ${pulseAnimation} infinite` : "none"};
  }
`;

export default Icon;
