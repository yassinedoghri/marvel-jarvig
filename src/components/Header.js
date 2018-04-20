import styled, {keyframes} from "styled-components";
import {media} from '../media';
import { bounceInDown } from 'react-animations';
import {rgba} from 'polished';
const bounceInDownAnimation = keyframes`${bounceInDown}`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 64px;
    padding: 0 1em;
    color: white;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${props => rgba(props.theme.colors.primary.base, .5)};
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    animation: 1s ${bounceInDownAnimation};
    
    ${media.tablet`
        position: relative;
    `}
`;

export default Header;
