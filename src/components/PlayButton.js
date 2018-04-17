import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {backgrounds} from 'polished';

const PlayButton = styled(Link)`
    ${props => backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.base+','+ props.theme.colors.accent.base+')', 'center no-repeat')};
    border: 2px solid ${props => props.theme.colors.accent.light};
    border-width: 4px 3px 4px 3px;
    font-weight: 600;
    color: ${props => props.theme.colors.dark.primary};
    text-decoration: none;
    margin: 1em auto 0.2em auto;
    padding: 0.25em 1em;
    border-radius: 30px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    font-size: ${props => props.theme.fontSize.lg};
    box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.14);
    
    &:hover {
        background: ${props => props.theme.colors.accent.base};
        color: ${props => props.theme.colors.primary.base};
        box-shadow: 0 19px 38px rgba(0,0,0,0.2), 0 15px 12px rgba(0,0,0,0.14);
        transform: scale(1.05);
    }

    &:active {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transform: scale(1);
    }
`;

export default PlayButton;
