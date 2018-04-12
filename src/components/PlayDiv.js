import styled from "styled-components";
import {media} from '../media';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${media.desktop`
        flex-direction: row;
        margin: 1em;
    `};

`;

export default Main;
