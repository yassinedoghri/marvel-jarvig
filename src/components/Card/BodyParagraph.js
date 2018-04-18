import Paragraph from '../Paragraph';
import {media} from "../../media";

export const BodyParagraph = Paragraph.extend`
    color: ${props => props.theme.colors.light.secondary};
    display: none;
    
    ${media.tablet`
        display: block;
    `}
`;

export default BodyParagraph;
