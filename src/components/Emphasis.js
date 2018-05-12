import styled from "styled-components";
import { getColor } from "utils/style";

const Emphasis = styled.em`
  color: ${props => getColor(props.theme, props.color, props.tint)};
  font-family: Bangers, sans-serif;
`;

export default Emphasis;
