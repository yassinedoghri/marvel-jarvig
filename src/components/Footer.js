import styled from "styled-components";
import {media} from '../media';

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.foreground.base};
    min-height: 50px;
    padding: 10px;
    color: white;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    
    ${media.tablet`
        flex-direction: row;
        position: relative;
    `}
`;

export default Footer;
