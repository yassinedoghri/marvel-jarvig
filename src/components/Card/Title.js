import styled from "styled-components";

const Title = styled.h2`
  color: ${props => props.theme.colors.contrastLight.secondary};
  font-family: Bangers, sans-serif;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 1.5rem;

  & span {
    font-family: Bangers, sans-serif;
  }
`;

export default Title;
