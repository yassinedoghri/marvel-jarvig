import Paragraph from '../Paragraph';
import {media} from "../../media";

export const Instruction = Paragraph.extend`
    color: ${props => props.theme.colors.light.secondary};
    display: none;
    
    ${media.tablet`
        display: block;
    `}
`;

export default Instruction;
