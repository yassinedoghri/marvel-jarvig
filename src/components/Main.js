import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: ${props => (props.isHome ? "0" : `${props.theme.spaces.xl}em`)};
`;

export default Main;
