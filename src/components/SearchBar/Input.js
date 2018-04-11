import styled from "styled-components";
import { rgba } from 'polished';

const Input = styled.input`
    padding: 0.6em 1em;
    background-color: transparent
    color: #222;
    border-radius: 0 25px 25px 0;
    border: none;
    width: 200px;
    transition: all 300ms ease-in-out;
  
    &:focus {
        width: 300px;
    }
    
    ::placeholder {
        color: ${props => props.theme.colors.dark.secondary};
        opacity: 1;
    }

`;

export default Input;
