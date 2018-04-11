import styled from 'styled-components';

import Title from './Title';
import Content from './Content';
import CloseButton from './CloseButton';
import Actions from './Actions';

const Sidebar = styled.aside`
    background-color: ${props => props.theme.colors.foreground.base};
    color: ${props => props.theme.colors.dark.primary};
    position: absolute;
    top: 0;
    left: ${props => props.hidden ? '-300px' : '0'};
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}};
    min-height: calc(100% - 50px);
    width: 300px;
`;

Sidebar.Title = Title;
Sidebar.Content = Content;
Sidebar.CloseButton = CloseButton;
Sidebar.Actions = Actions;

export default Sidebar;
