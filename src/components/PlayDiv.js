import styled from "styled-components";
import media from "media";

const PlayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.space ? "1em" : "0")};
  box-sizing: border-box;

  ${media.tablet`
        margin-top: 2em;
    `};

  ${media.desktop`
        flex-direction: row;
        margin: 1em;
        margin-top: 3em;
    `};
`;

export default PlayDiv;
