import styled from "styled-components";
import media from "utils/media";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.foreground.base};
  min-height: 3em;
  padding: 0 ${props => props.theme.spaces.md}em;
  color: white;
  z-index: 3;

  ${media.tablet`
        flex-direction: row;
        position: relative;
    `};
`;

export default Footer;
