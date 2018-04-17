import styled from 'styled-components';

import Title from './Title';
import Ribbon from './Ribbon';
import Body from './Body';
import ActionBtn from './ActionBtn';
import ActionContainer from './ActionContainer';
import {media} from '../../media';

const QuestionCard = styled.div`
    position: relative;
    width: 100%;
    background-color: white;
    border: solid black;
    border-width: 3px 4px 3px 5px;
    border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    box-sizing: border-box;
    padding: .8em;
    ${media.desktop`
        width: 15em;
        margin-left: auto;
    `}
    ${media.giant`
        width: 20em;
        margin-left: auto;
    `}

`;

QuestionCard.Title = Title;
QuestionCard.Ribbon = Ribbon;
QuestionCard.Body = Body;
QuestionCard.ActionBtn = ActionBtn;
QuestionCard.ActionContainer = ActionContainer;

export default QuestionCard;
