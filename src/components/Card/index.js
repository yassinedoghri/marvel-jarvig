import styled, {keyframes} from 'styled-components';

import Title from './Title';
import Ribbon from './Ribbon';
import BodyParagraph from './BodyParagraph';
import BodyResult from './BodyResult';
import BodyContainer from './BodyContainer';
import ActionBtn from './ActionBtn';
import ActionLink from './ActionLink';
import ActionContainer from './ActionContainer';
import Hint from './Hint';
import HintMessage from './HintMessage';

import {media} from '../../media';
import {tada, bounceIn, shake} from 'react-animations';

const tadaAnimation = keyframes`${tada}`;
const bounceInAnimation = keyframes`${bounceIn}`;
const shakeAnimation = keyframes`${shake}`;

const Card = styled.div`
    position: relative;
    width: 100%;
    background-color: ${props => props.theme.colors.background.base};
    border: solid ${props => props.theme.colors.foreground.base};
    border-width: 3px 4px 3px 5px;
    border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    box-sizing: border-box;
    padding: .8em;
    margin: ${props => props.alignCenter ? '0 auto' : '0'};
    margin-left: ${props => props.alignRight ? 'auto' : '0' };
    margin-bottom: 3em;
    animation: 1s ${props => {
        if (props.animation === 'correct') return tadaAnimation;
        if (props.animation === 'incorrect') return shakeAnimation;
        return bounceInAnimation;
    }};
    
    
    
    ${media.desktop`
        width: 15em;
        margin-left: auto;
    `}
    ${media.giant`
        width: 20em;
        margin-left: auto;
    `}
`;

Card.Title = Title;
Card.Ribbon = Ribbon;
Card.BodyParagraph = BodyParagraph;
Card.BodyResult = BodyResult;
Card.BodyContainer = BodyContainer;
Card.ActionBtn = ActionBtn;
Card.ActionLink = ActionLink;
Card.ActionContainer = ActionContainer;
Card.Hint = Hint;
Card.HintMessage = HintMessage;

export default Card;
