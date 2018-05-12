import styled from "styled-components";
import media from "utils/media";

const FlexGrid = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.spaces.md}em;

  ${media.desktop`
    max-height: 45em;
    overflow-y: auto;
    overflow-x: visible;
    flex-wrap: wrap;
  `};
`;

export default FlexGrid;
