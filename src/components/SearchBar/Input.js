import styled from "styled-components";
import {media} from '../../media';

const Input = styled.input`
    padding: 0.6em 1em;
    background-color: transparent
    color: #222;
    border-radius: 0 25px 25px 0;
    border: none;
    width: 200px;
    transition: all 300ms ease-in-out;
    
    ::placeholder {
        color: ${props => props.theme.colors.dark.secondary};
        opacity: 1;
    }
    
    ${media.tablet`
        &:focus {
            width: 18.75em;
        }
    `}
`;

export default Input;
