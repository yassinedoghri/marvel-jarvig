import styled from 'styled-components';
import {backgrounds} from 'polished';

const Button = styled.button`
    color: ${props => {
        if (props.dark) return props.theme.colors.dark.primary;
        return props.theme.colors.light.primary;
    }};
    border: none;
    background-color: ${props => props.theme.colors.primary.base};
    ${props => {
        if (props.primary) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.base+','+ props.theme.colors.primary.light+')', 'center no-repeat');
        if (props.accent) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.accent.base+','+ props.theme.colors.accent.light+')', 'center no-repeat');
        if (props.accent2) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.accent2.base+','+ props.theme.colors.accent2.light+')', 'center no-repeat');
        if (props.play) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.base+','+ props.theme.colors.accent.light+')', 'center no-repeat');
        return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.def.base+','+ props.theme.colors.def.light+')', 'center no-repeat');
    }};
    margin: ${props => props.center ? '1em auto' : '1em'};;
    padding: 0.25em 1em;
    border-radius: 3px;
    width: fit-content; //not supported by all browsers
    cursor: pointer;
    transition: all 300ms ease-in-out;
    font-size: ${props => {
        if (props.xl) return props.theme.fontSize.xl;
        if (props.lg) return props.theme.fontSize.lg;
        if (props.md) return props.theme.fontSize.md;
        if (props.sm) return props.theme.fontSize.sm;
        return props.theme.fontSize.nm;
    }};
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    
    &:hover {
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    }
    
    &:active {
        ${props => {
            if (props.primary) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.dark+','+ props.theme.colors.primary.base+')', 'center no-repeat');
            if (props.accent) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.accent.dark+','+ props.theme.colors.accent.base+')', 'center no-repeat');
            if (props.accent2) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.accent2.dark+','+ props.theme.colors.accent2.base+')', 'center no-repeat');
            if (props.play) return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.dark+','+ props.theme.colors.accent.base+')', 'center no-repeat');
            return backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.def.dark+','+ props.theme.colors.def.light+')', 'center no-repeat');
        }};
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    }
    
    &:disabled,
    &[disabled] {
        background: ${props => props.theme.colors.def.base};
        color: ${props => props.theme.colors.def.dark};
        box-shadow: none;
        cursor: not-allowed;
    }
`;

export default Button;
