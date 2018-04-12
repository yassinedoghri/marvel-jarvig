import styled from "styled-components";
import {media} from '../media';

const Copyright = styled.p`
    margin: 1em auto;
    font-size: .75rem;
    color: ${props => props.theme.colors.dark.secondary};
    
    ${media.tablet`margin-right: 0;`}
`;

export default Copyright;
