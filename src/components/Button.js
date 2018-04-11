import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.theme.colors.accent.base};
    border: 2px solid ${props => props.theme.colors.accent.base};
    background-color: ${props => props.theme.colors.primary.base};
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
    
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};

    }
`;

export default Button;
