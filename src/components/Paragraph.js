import styled from "styled-components";
import { getColor, setFontSize } from "utils/style";

const Paragraph = styled.p`
  width: ${props => (props.full ? "100%" : "auto")};
  ${props => setFontSize(props.theme, props.size)};
  color: ${props => getColor(props.theme, props.color, props.tint)};
  text-align: ${props => {
    if (props.center) return "center";
    if (props.right) return "right";
    if (props.justify) return "justify";
    return "left";
  }};
  line-height: ${props =>
    props.lineHeight ? `${props.lineHeight}rem` : "1.3rem"};

  & a {
    text-decoration: underline;
    color: ${props =>
      getColor(props.theme, props.anchorColor, props.anchorTint)};
  }

  & a:hover {
    text-decoration: none;
  }
`;

export default Paragraph;
