import styled from 'styled-components';
import {media} from "../../media";

export const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1em;
    
    ${media.desktop`
        flex-direction: column;
    `}
    ${media.giant`
        flex-direction: row;
    `}
`;

export default ActionContainer;
