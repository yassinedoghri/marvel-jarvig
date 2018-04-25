import styled from "styled-components";
import { transitions } from "polished";
import media from "media";

import Title from "components/Sidebar/Title";
import Content from "components/Sidebar/Content";
import CloseButton from "components/Sidebar/CloseButton";

const Sidebar = styled.aside`
  background-color: ${props => props.theme.colors.foreground.base};
  color: ${props => props.theme.colors.dark.primary};
  position: absolute;
  top: 0;
  left: ${props => (props.open ? "0" : "-300px")};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  ${transitions("all 500ms ease-in-out")} width: 100%;
  background: ${props => props.theme.colors.light.primary};
  position: fixed;
  height: 100%;
  top: 0;
  left: ${props => (props.open ? "0" : "-100%")};
  overflow-y: auto;
  z-index: 1200;
  padding-bottom: 4em;
  box-sizing: border-box;

  ${media.tablet`
        min-height: calc(100% - 50px);
        width: 20em;
        z-index: 300;
    `};
`;

Sidebar.Title = Title;
Sidebar.Content = Content;
Sidebar.CloseButton = CloseButton;

export default Sidebar;
