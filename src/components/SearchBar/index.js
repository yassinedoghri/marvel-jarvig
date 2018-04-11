import styled from 'styled-components';

import Icon from './Icon';
import Input from './Input';
import {rgba} from "polished";

const SearchBar = styled.div`
    margin-left: auto;
    height: fit-content;
    background-color: ${props => rgba(props.theme.colors.background.base, 0.4)};
    border-radius: 25px;
`;

SearchBar.Icon = Icon;
SearchBar.Input = Input;

export default SearchBar;
