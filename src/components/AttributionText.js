import Paragraph from "components/Paragraph";

const AttributionText = Paragraph.extend`
  color: ${props => props.theme.colors.contrastLight.disabled};
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.spaces.md}em 0;
`;

export default AttributionText.withComponent("footer");
