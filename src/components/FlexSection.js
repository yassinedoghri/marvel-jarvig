import styled from "styled-components";
import media from "utils/media";

const FlexSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.spaces.lg}em;
  max-width: 90em;

  ${media.desktop`
    padding: 0 ${props => props.theme.spaces.xl}em;
  `};
`;

export default FlexSection;
