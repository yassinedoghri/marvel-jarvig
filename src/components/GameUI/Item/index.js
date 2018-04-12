import styled from 'styled-components';

import Icon from './Icon';
import Label from './Label';

const Item = styled.li`
    display: inline;
    font-size: 1.2rem;
    
    &:last-child {
        margin-left: 1em;
    }
`;

Item.Icon = Icon;
Item.Label = Label;

export default Item;
