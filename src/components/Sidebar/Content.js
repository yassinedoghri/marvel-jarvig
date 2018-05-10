import styled from "styled-components";

const Content = styled.div`
  padding: ${props => props.theme.spaces.lg}em;
  text-align: justify;
  color: ${props => props.theme.colors.contrastDark.base};
`;

export default Content;
