import styled from "styled-components";
import media from "utils/media";

const BodyContainer = styled.div`
  padding: 0;

  ${media.desktop`
    padding: 1em;
  `};
`;

export default BodyContainer;
