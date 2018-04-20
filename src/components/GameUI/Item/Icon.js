import styled, {keyframes} from "styled-components";
import {pulse} from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

const Icon = styled.span`
    color: ${props => props.theme.colors.dark.primary};
    padding-left: .6em;
    padding-right: .3em;
    font-size: 1.8rem;
    
    & svg{
        animation: ${props => props.animated ? `1s ${pulseAnimation} infinite` : 'none'};
    }
`;

export default Icon;
