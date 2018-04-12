import styled from "styled-components";

export const RadioBtn = styled.input.attrs({
        type: 'radio',
    })`
    position: absolute;
    left: -9999px;
    
    &:checked + label>img {
        border-color: ${props => props.theme.colors.accent.base};
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

export default RadioBtn;
