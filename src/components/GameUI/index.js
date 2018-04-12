import styled from 'styled-components';
import {media} from '../../media';

import Item from './Item';

const GameUI = styled.ul`
    list-style-type: none;
    padding: 0;
    ${media.tablet`margin-left: auto;`}
`;

GameUI.Item = Item;

export default GameUI;
