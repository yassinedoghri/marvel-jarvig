import styled from "styled-components";

export const JarvigText = styled.h1`
    color: ${props => props.theme.colors.light.secondary};
    font-family: Bangers;
    margin: 0;
    text-align: center;
    letter-spacing: .4em;
    font-size: ${props => props.sm ? '1rem' : '2rem'};
    margin-left: ${props => props.spaceLeft ? '.5em' : '0'};
`;

export default JarvigText;