import styled from "styled-components";
import {media} from "../media";

export const Main = styled.main`
    color: ${props => props.theme.colors.dark.primary};
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    padding-top: 6em;
    ${media.tablet`padding-top: 0;`}
`;

export default Main;
