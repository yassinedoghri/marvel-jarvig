import Paragraph from '../Paragraph';
import {media} from "../../media";

export const Body = Paragraph.extend`
    color: ${props => props.theme.colors.light.secondary};
    display: none;
    
    ${media.tablet`
        display: block;
    `}
`;

export default Body;
