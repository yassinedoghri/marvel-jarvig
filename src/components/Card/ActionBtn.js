import Button from '../Button';
import {media} from "../../media";

export const ActionBtn = Button.extend`
    font-family: Bangers;
    padding: .5em 1em;
    text-align: center;
    letter-spacing: .1em;
    font-size: 1rem;
    box-sizing: border-box;
    width: ${props => props.half ? '48%' : '100%'};
    
    ${media.desktop`
        width: 100%;
        &:first-child {
            margin-bottom: .5em;
        }
    `}
    ${media.giant`
        width: ${props => props.half ? '48%' : '100%'};
        &:first-child {
            margin-bottom: 0;
        }
    `}
`;

export default ActionBtn;
