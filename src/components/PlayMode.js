import styled from "styled-components";

const PlayMode = styled.p`
  margin: 1em auto;
  color: ${props => props.theme.colors.contrastDark.secondary};

  & button {
    color: ${props => props.theme.colors.contrastDark.primary};
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
