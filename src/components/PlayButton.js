import { Button } from "components/index";
import { bounceIn, pulse } from "react-animations";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import { getColor } from "utils/style";

const bounceInAnimation = keyframes`${bounceIn}`;
const pulseAnimation = keyframes`${pulse}`;

const PlayButton = Button.withComponent(Link).extend`
  font-family: "Press Start 2P", sans-serif;
  text-shadow: 0 2px 0 ${props =>
    getColor(props.theme, props.backgroundcolor, "dark")};
  border: 1px solid ${props => getColor(props.theme, props.color, "light")};
  font-weight: 900;
  font-size: 1.3rem;
  padding: ${props => props.theme.spaces.sm + 0.25}em ${props =>
  props.theme.spaces.md}em !important;
  color: ${props => getColor(props.theme, props.color, "light")};
  margin: 1em auto 0.2em auto;
  border-radius: ${props => props.theme.spaces.sm}em;
  animation: 1s ${bounceInAnimation}, 1.5s ${pulseAnimation} 1s infinite;;

  &:hover {
    color: ${props => getColor(props.theme, props.color, "light")};
    animation: none;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export default PlayButton;
