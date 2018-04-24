import { Paragraph } from "components";
import media from "media";

const BodyParagraph = Paragraph.extend`
  color: ${props => props.theme.colors.light.secondary};
  display: none;

  ${media.tablet`
        display: block;
    `};
`;

export default BodyParagraph;
