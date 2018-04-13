import styled from "styled-components";

export const Main = styled.main`
    background-color: ${props => props.theme.colors.primary.base};
    color: ${props => props.theme.colors.dark.primary};
    display: flex;
    flex-direction: column;
    flex-grow: 2;
`;

export default Main;
