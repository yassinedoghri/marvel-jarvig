import styled from 'styled-components';

import Question from './Question';
import Instruction from './Instruction';
import Action from './Action';
import {media} from '../../media';

const QuestionCard = styled.div`
    width: 100%;
    background-color: white;
    border: solid black;
    border-width: 3px 4px 3px 5px;
    border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    box-sizing: border-box;
    ${media.desktop`
        width: 15em;
        margin-left: auto;
    `}
    ${media.giant`
        width: 20em;
        margin-left: auto;
    `}

`;

QuestionCard.Question = Question;
QuestionCard.Instruction = Instruction;
QuestionCard.Action = Action;

export default QuestionCard;
