import styled, {keyframes} from 'styled-components';
import {transitions} from 'polished';
import {media} from "../../media";
import {bounceIn} from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

export const Hint = styled.button`
    position: absolute;
    top: -1.2em;
    right: -1em;
    padding: .5em .6em;
    font-weight: bold;
    background: ${props => props.theme.colors.accent.base};
    color: ${props => props.theme.colors.light.primary};
    border: solid ${props => props.theme.colors.foreground.base};
    border-width: 3px 4px 5px 3px;
    border-radius: 25px;
    transform: rotate(10deg);
    animation: 1s ${bounceInAnimation};
    ${transitions('all 200ms ease-in-out')}
    z-index: 10;
    
    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors.accent.light};
    }
    
    &:active {
        background: ${props => props.theme.colors.accent.dark};
    }
    
    ${media.tablet`
        display: block;
    `}
`;

export default Hint;
