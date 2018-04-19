import styled from "styled-components";

export const RadioBtn = styled.input.attrs({
        type: 'radio',
    })`
    position: absolute;
    left: -9999px;
    
    &:checked + label>figure>img {
        border-color: ${props => props.theme.colors.accent.base};
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        transform: scale(1.1);
    }
    
    &:checked + label>figure>figcaption {
        border-color: ${props => props.theme.colors.accent.base};
        background-color: ${props => props.theme.colors.accent.base};
        color: ${props => props.theme.colors.light.primary};
        transform: scale(1.1);   
    }
    
    &:checked + label>figure>img:hover {
        transform: scale(1.1)!important;
    }
    
    &:disabled + label>figure>img:hover {
        cursor: not-allowed;
        transform: scale(1);
    }
    
    &:disabled + label>figure>img, &:disabled + label>figure>figcaption {
        border-color:  ${props => {
            if (props.result === 'selectedRight') return props.theme.colors.accent2.base;
            if (props.result === 'selectedWrong') return props.theme.colors.primary.dark;
            if (props.result === 'answerRight') return props.theme.colors.accent2.base;
            return props.theme.colors.foreground.base;
        }};
    }
    
    &:disabled + label>figure>figcaption {
        background-color:  ${props => {
            if (props.result === 'selectedRight') return props.theme.colors.accent2.base;
            if (props.result === 'selectedWrong') return props.theme.colors.primary.dark;
            if (props.result === 'answerRight') return props.theme.colors.accent2.base;
            return props.theme.colors.foreground.base;
        }};
    }
`;

export default RadioBtn;
