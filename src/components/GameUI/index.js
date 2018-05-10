import Icon from "components/GameUI/Icon";

import Item from "components/GameUI/Item";
import Label from "components/GameUI/Label";
import styled from "styled-components";
import media from "utils/media";

const GameUI = styled.ul`
  padding: 0;
  margin-left: auto;
  ${media.tablet`margin-left: auto;`};
`;

GameUI.Item = Item;
GameUI.Icon = Icon;
GameUI.Label = Label;

export default GameUI;
