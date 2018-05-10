import { transitions } from "polished/lib/index";
import styled from "styled-components";

const Caption = styled.figcaption`
  position: absolute;
  width: ${props => (props.checked ? "100%" : "auto")};
  bottom: ${props => (props.checked ? "-.5em" : "1em")};
  left: ${props => (props.checked ? "0" : "1em")};
  font-weight: ${props => (props.checked ? "normal" : "900")};
  text-align: center;
  font-size: ${props => props.theme.fontSize.sm}rem;
  background: ${props => props.theme.colors.foreground.base};
  color: ${props => props.theme.colors.contrastDark.primary};
  padding: 0.2em 0.5em;
  border: solid ${props => props.theme.colors.foreground.base};
  border-width: 2px 2px 3px 3px;
  border-radius: ${props =>
    props.checked ? "4% 95% 6% 95%/95% 4% 92% 5%" : "25px"};
  transform: rotate(-2deg);
  ${transitions("all 200ms ease-in-out")};
`;

export default Caption;
