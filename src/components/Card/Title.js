import styled from "styled-components";

export const Title = styled.h2`
    color: ${props => props.theme.colors.light.secondary};
    font-family: Bangers;
    text-align: center;
    letter-spacing: .1em;
    font-size: 1.4rem;
    
    & span {
        font-family: Bangers;
    }
`;

export default Title;
