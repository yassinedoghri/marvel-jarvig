import { transitions } from "polished";
import styled from "styled-components";
import media from "utils/media";
import { getColor, setFontSize } from "utils/style";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.iconright ? "row-reverse" : "row")};
  color: ${props => getColor(props.theme, props.color, props.tint)};
  background-color: ${props => getColor(props.theme, props.backgroundcolor)};
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 0.5em;
  padding: ${props => props.theme.spaces.sm}em
    ${props => props.theme.spaces.md}em;
  box-shadow: 0 2px 0
      ${props => getColor(props.theme, props.backgroundcolor, "dark")},
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 0 3px rgba(255, 255, 255, 0.5), inset 0em 0em 2em rgba(0, 0, 0, 0.3);
  ${props => setFontSize(props.theme)};
  font-family: "Bangers", sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${transitions("all 300ms ease-in-out")};

  &:hover {
    box-shadow: 0 2px 0
        ${props => getColor(props.theme, props.backgroundcolor, "dark")},
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 0 3px rgba(255, 255, 255, 0.5),
      inset 0em 0em 1em rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 0 2px 0
        ${props => getColor(props.theme, props.backgroundcolor, "dark")},
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 0 3px rgba(255, 255, 255, 0.5),
      inset 0em 0em 3em rgba(0, 0, 0, 0.3);
  }

  &:disabled,
  &[disabled] {
    background: ${props => props.theme.colors.default.base};
    color: ${props => props.theme.colors.default.dark};
    box-shadow: none;
    cursor: not-allowed;
  }

  ${media.desktop`
    padding: ${props => props.theme.spaces.md}em
    ${props => props.theme.spaces.lg}em;
  `};

  & span {
    font-family: "Bangers", sans-serif;
  }

  & svg {
    margin: 0 ${props => (props.iconright ? 0 : `${props.theme.spaces.sm}em`)} 0
      ${props => (props.iconright ? `${props.theme.spaces.sm}em` : 0)};
  }
`;

export default Button;
