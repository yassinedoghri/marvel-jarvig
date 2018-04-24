import styled from "styled-components";
import media from "media";

export const FlexSection = styled.section`
  padding-top: ${props => (props.spaceTop ? "2em" : "0")};
  padding-right: ${props => (props.spaceRight ? "2em" : "0")};
  padding-left: ${props => (props.spaceLeft ? "2em" : "0")};
  padding-bottom: ${props => (props.spaceDown ? "18em" : "0")};
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet`
        padding-top: ${props => {
          if (props.spaceTop) return "4em";
          return "0";
        }};
        padding-right: ${props => (props.spaceRight ? "4em" : "0")};
        padding-left: ${props => (props.spaceLeft ? "4em" : "0")};
        padding-bottom: 0;
    `};
`;

export default FlexSection;
