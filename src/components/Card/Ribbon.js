import Paragraph from "components/Paragraph";
import { bounceIn } from "react-animations";
import { keyframes } from "styled-components";
import media from "utils/media";
import { getColor } from "utils/style";

const bounceInAnimation = keyframes`${bounceIn}`;

const Ribbon = Paragraph.extend`
  position: absolute;
  top: -2.5em;
  left: -1em;
  padding: 0.5em;
  font-weight: bold;
  background: ${props => getColor(props.theme, props.backgroundcolor)};
  color: ${props => props.theme.colors.contrastDark.primary};
  border: solid ${props => props.theme.colors.foreground.base};
  border-width: 4px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(-2deg);
  animation: 1s ${bounceInAnimation};
  z-index: 1;

  ${media.tablet`
        display: block;
    `};
`;

export default Ribbon;
