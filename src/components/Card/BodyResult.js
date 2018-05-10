import styled from "styled-components";
import media from "utils/media";

const BodyResult = styled.h3`
  font-family: Bangers, sans-serif;
  color: ${props => props.theme.colors.foreground.base};
  font-size: 4rem;
  text-align: center;
  margin: 0;
  letter-spacing: 0.1em;

  & span {
    font-family: Bangers, sans-serif;
    color: ${props => props.theme.colors.accent.base};
    text-shadow: -1px 2px 0px ${props => props.theme.colors.primary.base},
      2px -1px 0px ${props => props.theme.colors.primary.base},
      4px 4px 0 ${props => props.theme.colors.foreground.base};
  }

  ${media.tablet`
    display: block;
  `};
`;

export default BodyResult;
