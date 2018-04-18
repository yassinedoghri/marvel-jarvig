import styled from 'styled-components';

import Label from './Label';
import Counter from './Counter';
import Checkbox from './Checkbox';

const Item = styled.div`
    position: relative;
`;

Item.Label = Label;
Item.Counter = Counter;
Item.Checkbox = Checkbox;

export default Item;
