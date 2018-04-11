import styled from "styled-components";

const Header = styled.header`
    background-color: ${props => props.theme.colors.primary.base};
    display: flex;
    min-height: 64px;
    padding: 20px;
    color: white;
    box-sizing: border-box;
`;

export default Header;
