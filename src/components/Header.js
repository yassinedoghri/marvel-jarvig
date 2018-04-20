import styled, {keyframes} from "styled-components";
import { bounceInDown } from 'react-animations';
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
    background-color: ${props => props.theme.colors.primary.dark};
    animation: 1s ${bounceInDownAnimation};
`;

export default Header;
