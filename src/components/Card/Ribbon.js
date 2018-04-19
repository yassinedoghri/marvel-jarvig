import {keyframes} from 'styled-components';
import Paragraph from '../Paragraph';
import {media} from "../../media";
import {bounceIn} from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

export const Ribbon = Paragraph.extend`
    position: absolute;
    top: -2.5em;
    left: -1em;
    padding: .5em;
    font-weight: bold;
    background: ${props => {
    if (props.danger) return props.theme.colors.primary.base;
    return props.theme.colors.accent2.base;
    }};
    color: ${props => props.theme.colors.dark.primary};
    border: solid ${props => props.theme.colors.foreground.base};
    border-width: 4px 3px 3px 5px;
    border-radius:95% 4% 97% 5%/4% 94% 3% 95%;
    transform: rotate(-2deg);
    animation: 1s ${bounceInAnimation};
    z-index: 12;
    
    ${media.tablet`
        display: block;
    `}
`;

export default Ribbon;
