import styled from "styled-components";
import {media} from '../media';

const Header = styled.header`
    background-color: ${props => props.theme.colors.primary.base};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 64px;
    padding: 1em;
    color: white;
    box-sizing: border-box;
    ${media.tablet`flex-direction: row;`}
`;

export default Header;
