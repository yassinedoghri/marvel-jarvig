import { Paragraph } from "components";

const BodyParagraph = Paragraph.extend`
  color: ${props => props.theme.colors.contrastLight.secondary};
`;

export default BodyParagraph;
