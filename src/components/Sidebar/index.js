import styled from 'styled-components';
import {transitions} from 'polished';
import {media} from '../../media';

import Title from './Title';
import Content from './Content';
import CloseButton from './CloseButton';
import Actions from './Actions';

const Sidebar = styled.aside`
    background-color: ${props => props.theme.colors.foreground.base};
    color: ${props => props.theme.colors.dark.primary};
    position: absolute;
    top: 0;
    left: ${props => props.open ? '0' : '-300px'};
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}};
    
    ${transitions('all 500ms ease-in-out')}
    
    width: 100%;
    background: ${props=> props.theme.colors.light.primary};
    position: fixed;
    height: 100%;
    top: 0;
    left: ${props => props.open ? '0' : '-100%'};
    
    ${media.tablet`
        height: calc(100% - 50px);
        width: 20em;
    `}

`;

Sidebar.Title = Title;
Sidebar.Content = Content;
Sidebar.CloseButton = CloseButton;
Sidebar.Actions = Actions;

export default Sidebar;
