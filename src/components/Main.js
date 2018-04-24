import styled from "styled-components";

export const Main = styled.main`
  color: ${props => props.theme.colors.dark.primary};
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: center;
  padding-top: ${props => (props.isHome ? "0" : "5em")};
`;

export default Main;
