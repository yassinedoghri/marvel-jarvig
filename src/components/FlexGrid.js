import styled from 'styled-components';
import {media} from '../media';

export const FlexGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    
    ${media.tablet`
        padding-bottom: 0;
        width: 40em;
        margin: 0 auto;
    `};
    
    ${media.desktop`
        width: 45em;
    `};
`;



export default FlexGrid;
