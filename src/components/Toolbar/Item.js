import styled from "styled-components";

const Item = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.accent.base};
  font-size: 1.3rem;
  padding: ${props => props.theme.spaces.xs}em
    ${props => props.theme.spaces.sm}em;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.accent.light};
  }

  &:active {
    color: ${props => props.theme.colors.accent.dark};
  }
`;

export default Item;
