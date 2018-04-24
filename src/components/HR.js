import styled from "styled-components";

const HR = styled.hr`
  border: 1px solid
    ${props => {
      if (props.light) return props.theme.colors.dark.secondary;
      return props.theme.colors.light.secondary;
    }};
`;

export default HR;
