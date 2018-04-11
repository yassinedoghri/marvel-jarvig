import styled from 'styled-components';

import Label from './Label';
import Counter from './Counter';

const Item = styled.div`
    position: relative;
`;

Item.Label = Label;
Item.Counter = Counter;

export default Item;
