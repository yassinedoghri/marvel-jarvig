import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.foreground.base};
    min-height: 50px;
    max-height: 50px;
    padding: 10px;
    color: white;
    box-sizing: border-box;
`;

export default Footer;
