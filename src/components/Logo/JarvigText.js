import styled from "styled-components";

const JarvigText = styled.h1`
  color: ${props =>
    props.sm
      ? props.theme.colors.contrastDark.secondary
      : props.theme.colors.contrastLight.secondary};
  font-family: Bangers, sans-serif;
  margin: 0 0 0 ${props => (props.spaceLeft ? ".5em" : "0")};
  text-align: center;
  letter-spacing: 0.4em;
  font-size: ${props => (props.sm ? "1rem" : "2rem")};
`;

export default JarvigText;
