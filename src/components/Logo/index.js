import Icon from "components/Logo/Icon";
import JarvigText from "components/Logo/JarvigText";

import MarvelLogo from "components/Logo/MarvelLogo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "utils/media";

const Logo = styled(Link)`
  margin: ${props => (props.center ? "0 auto" : "0")};
  display: ${props => {
    if (!props.hidden) {
      return props.inline ? "flex" : "block";
    }
    return "none";
  }};
  align-items: center;

  & > svg {
    color: ${props => props.theme.colors.contrastDark.secondary};
    font-size: 2rem;
    margin-right: ${props => props.theme.spaces.xs}em;
  }

  &:hover > svg {
    color: ${props => props.theme.colors.contrastDark.primary};
  }

  & ${MarvelLogo}, & ${JarvigText} {
    display: ${props => (props.mobileicon ? "none" : "block")};
  }

  & ${Icon} {
    display: ${props => (props.mobileicon ? "block" : "none")};
  }

  ${media.desktop`
    & ${MarvelLogo}, & ${JarvigText} {
      display: block;
    }

    & ${Icon} {
      display: none;
    }  
  `};
`;

Logo.MarvelLogo = MarvelLogo;
Logo.JarvigText = JarvigText;
Logo.Icon = Icon;

export default Logo;
