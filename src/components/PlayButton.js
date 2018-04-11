import Button from './Button';
import {backgrounds} from 'polished';

const PlayButton = Button.extend`
    color: ${props => props.theme.colors.dark.primary};
    ${props => backgrounds('url("/image/background.jpg")', 'linear-gradient(45deg, '+ props.theme.colors.primary.base+','+ props.theme.colors.accent.base+')', 'center no-repeat')};
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    
    &:focus {
        box-shadow: none;
    }
`;

export default PlayButton;
