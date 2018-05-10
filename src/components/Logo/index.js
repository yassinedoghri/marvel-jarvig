import JarvigText from "components/Logo/JarvigText";

import MarvelLogo from "components/Logo/MarvelLogo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(Link)`
  margin: ${props => (props.center ? "0 auto" : "0")};
  display: ${props => (props.inline ? "flex" : "block")};
  align-items: center;
  visibility: ${props => (props.hidden ? "hidden" : "visible")};
  text-decoration: none;
`;

Logo.MarvelLogo = MarvelLogo;
Logo.JarvigText = JarvigText;

export default Logo;
