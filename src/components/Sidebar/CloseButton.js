import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  color: ${props => props.theme.colors.contrastDark.secondary};
  border: none;
  top: 0;
  right: 0;
  font-size: 3em;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.contrastDark.primary};
  }
`;

export default CloseButton;
