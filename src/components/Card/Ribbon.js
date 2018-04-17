import Paragraph from '../Paragraph';
import {media} from "../../media";

export const Body = Paragraph.extend`
    position: absolute;
    top: -2.5em;
    left: -1em;
    padding: .5em;
    font-weight: bold;
    background: ${props => props.theme.colors.accent2.base};
    color: ${props => props.theme.colors.dark.primary};
    border: solid black;
    border-width: 4px 3px 3px 5px;
    border-radius:95% 4% 97% 5%/4% 94% 3% 95%;
    transform: rotate(-2deg);
    
    
    ${media.tablet`
        display: block;
    `}
`;

export default Body;
