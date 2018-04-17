import styled from "styled-components";

export const PlayMode = styled.p`
    margin: 1em auto;
    color: ${props => props.theme.colors.dark.secondary};
    
    & button {
        color: ${props => props.theme.colors.dark.primary};
        background: transparent;
        border: none;
        text-decoration: underline;
        cursor: pointer;
    }
    
    & button:hover {
        text-decoration: none;
    }
`;

export default PlayMode;
