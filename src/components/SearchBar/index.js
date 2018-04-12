import styled from 'styled-components';
import {media} from '../../media';

import Icon from './Icon';
import Input from './Input';
import {rgba} from "polished";

const SearchBar = styled.div`
    margin-left: auto;
    height: fit-content;
    width: 100%;
    background-color: ${props => rgba(props.theme.colors.background.base, 0.4)};
    border-radius: 25px;
    visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    ${media.tablet`width: auto;`}
`;

SearchBar.Icon = Icon;
SearchBar.Input = Input;

export default SearchBar;
