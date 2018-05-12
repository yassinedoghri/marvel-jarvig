import Icon from "components/GameUI/Icon";

import Item from "components/GameUI/Item";
import Label from "components/GameUI/Label";
import styled from "styled-components";

const GameUI = styled.ul`
  padding: 0;
  margin-left: auto;
`;

GameUI.Item = Item;
GameUI.Icon = Icon;
GameUI.Label = Label;

export default GameUI;
