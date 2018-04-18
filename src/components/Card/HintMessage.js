import styled, {keyframes} from 'styled-components';
import {transitions} from 'polished';
import {media} from "../../media";
import {bounceIn} from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

export const HintMessage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 3px 4px 3px 5px;
    border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
    box-sizing: border-box;
    padding: 1em;
    padding-top: 2em;
    overflow-y: auto;
    background: ${props => props.theme.colors.foreground.base};
    color: ${props => props.theme.colors.dark.primary};
    animation: 1s ${bounceInAnimation};
    ${transitions('all 200ms ease-in-out')}
    display: ${props => props.hidden ? 'none' : 'block' }
    
    ${media.tablet`
        display: block;
    `}
`;

export default HintMessage;
