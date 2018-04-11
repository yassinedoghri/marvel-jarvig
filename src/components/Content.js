import styled from "styled-components";

export const Content = styled.section`
    background-color: ${props => props.theme.colors.primary.base};
    color: ${props => props.theme.colors};;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    font-size: large;
    padding: 4em 2em; 
`;

export default Content;
