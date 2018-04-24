import styled from "styled-components";

import Label from "components/Settings/Item/Label";
import Counter from "components/Settings/Item/Counter";
import Checkbox from "components/Settings/Item/Checkbox";

const Item = styled.div`
  position: relative;
`;

Item.Label = Label;
Item.Counter = Counter;
Item.Checkbox = Checkbox;

export default Item;
