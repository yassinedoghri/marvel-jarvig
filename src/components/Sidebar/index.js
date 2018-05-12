import CloseButton from "components/Sidebar/CloseButton";
import Content from "components/Sidebar/Content";

import Title from "components/Sidebar/Title";
import { transitions } from "polished";
import styled from "styled-components";
import media from "utils/media";

const Sidebar = styled.aside`
  background-color: ${props => props.theme.colors.foreground.base};
  color: ${props => props.theme.colors.contrastDark.primary};
  left: ${props => (props.open ? "0" : "-300px")};
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  height: 100%;
  top: 0;
  left: ${props => (props.open ? "0" : "-100%")};
  overflow-y: auto;
  z-index: 3;
  padding-bottom: 3em;
  ${transitions("all 500ms ease-in-out")};

  ${media.tablet`
    width: 20em;
  `};
`;

Sidebar.Title = Title;
Sidebar.Content = Content;
Sidebar.CloseButton = CloseButton;

export default Sidebar;
