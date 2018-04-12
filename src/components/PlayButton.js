import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {backgrounds} from 'polished';

const PlayButton = styled(Link)`
    ${props => backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.base+','+ props.theme.colors.accent.base+')', 'center no-repeat')};
    border: 2px solid ${props => props.theme.colors.accent.light};
    font-weight: 600;
        color: ${props => props.theme.colors.dark.primary};
    text-decoration: none;
    margin: 1em auto;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    font-size: ${props => props.theme.fontSize.lg};
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    }
    
    &:focus {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    }
`;

export default PlayButton;
