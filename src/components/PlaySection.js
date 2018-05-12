import { Card, FlexSection } from "components";
import media from "utils/media";

const PlaySection = FlexSection.extend`
  align-items: center;
  justify-content: center;
  max-width: 110em;
  padding: 0;

  ${media.desktop`
    flex-direction: row;
  `};

  & ${Card} {
    width: calc(100% - ${props => props.theme.spaces.xl}em);
    margin-top: ${props => props.theme.spaces.lg}em;

    ${media.desktop`
      margin-right: 5em;
    `};
  }
`;

export default PlaySection;
