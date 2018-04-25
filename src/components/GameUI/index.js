import styled from "styled-components";
import media from "media";

import Item from "components/GameUI/Item";
import Icon from "components/GameUI/Icon";
import Label from "components/GameUI/Label";

const GameUI = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-left: auto;
  ${media.tablet`margin-left: auto;`};
`;

GameUI.Item = Item;
GameUI.Icon = Icon;
GameUI.Label = Label;

export default GameUI;
