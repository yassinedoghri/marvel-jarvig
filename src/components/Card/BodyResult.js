import styled from 'styled-components';
import {media} from "../../media";

export const BodyParagraph = styled.h3`
    font-family: Bangers;
    color: ${props => props.theme.colors.foreground.base};
    font-size: 4rem;
    text-align: center;
    margin: 0;
    letter-spacing: .1em;
    
    & span {
        font-family: Bangers;
        color: ${props => props.theme.colors.accent.base};
        text-shadow: -1px 2px 0px ${props => props.theme.colors.primary.base}, 2px -1px 0px ${props => props.theme.colors.primary.base}, 4px 4px 0 ${props => props.theme.colors.foreground.base};
    }
    
    ${media.tablet`
        display: block;
    `}
`;

export default BodyParagraph;
