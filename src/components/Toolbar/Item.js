import styled from "styled-components";

const Item = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.accent.base};
  font-size: ${props => {
    if (props.xl) return props.theme.fontSize.xl;
    if (props.lg) return props.theme.fontSize.lg;
    if (props.md) return props.theme.fontSize.md;
    if (props.sm) return props.theme.fontSize.sm;
    return props.theme.fontSize.nm;
  }};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.accent.light};
  }

  &:active {
    color: ${props => props.theme.colors.accent.dark};
  }
`;

export default Item;
