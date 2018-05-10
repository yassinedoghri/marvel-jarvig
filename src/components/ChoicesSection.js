import { FlexSection } from "components";
import media from "utils/media";

const ChoicesSection = FlexSection.extend`
  align-items: center;
  justify-content: center;
  max-width: 70em;
  padding: 0;

  ${media.desktop`
      padding: initial;
  `};
`;

export default ChoicesSection;
