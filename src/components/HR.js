import styled from "styled-components";
import { getColor } from "utils/style";

const HR = styled.hr`
  height: 1px;
  background: ${props => getColor(props.theme, props.color, props.tint)};
  border: none;
`;

export default HR;
