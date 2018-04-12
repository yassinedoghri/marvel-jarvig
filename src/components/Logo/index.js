import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {media} from '../../media';

import MarvelLogo from './MarvelLogo';
import JarvigText from './JarvigText';

const Logo = styled(Link)`
    margin: ${props => props.center ? '0 auto' : 'inherit'};
    display: ${props => props.inline ? 'flex' : 'block'};
    align-items: center;
    visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    text-decoration: none;
    ${media.tablet`margin: ${props => props.center ? '0 auto' : 'inherit'};`}
`;

Logo.MarvelLogo = MarvelLogo;
Logo.JarvigText = JarvigText;

export default Logo;
