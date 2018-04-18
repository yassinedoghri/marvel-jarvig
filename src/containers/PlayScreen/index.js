import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {push} from 'react-router-redux'

import {FlexSection, FlexGrid, Character, Card, FlexAside, PlayDiv, Emphasis, Paragraph} from "../../components";
import {resetSidebars, toggleHint} from "../../actions/UIActions";
import {
    callRequest,
    checkAnswer,
    initNewGame,
    passQuestion,
    nextQuestion,
    selectCharacter,
    endGame,
} from "../../actions/GameActions";
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import TiLightbulb from 'react-icons/lib/ti/lightbulb';
import TiTimes from 'react-icons/lib/ti/times';

class PlayScreen extends Component {
    constructor(props) {
        super(props);

        const {initNewGame, redirect, history} = this.props;

        if (history.action === 'POP') {
            redirect('/');
        } else {
            // init new jarvig;
            initNewGame();
        }
    }

    componentDidMount() {
        const {resetSidebars} = this.props;
        resetSidebars();
    }

    componentDidUpdate() {
        const {callRequest, game, jarvigSettings, redirect, endGame} = this.props;
        // if choices haven't been set, call request and set choices
        if (!game.choices) {
            // check if all questions have been answered and there are lives remaining
            if (game.result.length < jarvigSettings.numberOfQuestions && game.remainingLives > 0) {
                // New Question: get new characters and set choices
                callRequest();
            } else {
                console.log('Game Over.');
                // Quizz is over: end game and redirect to results page
                endGame();
                redirect('/result')
            }
        }
    }

    charactersGrid() {
        const {game, selectCharacter} = this.props;

        let gridItems = '';
        if (game.choices) {
            gridItems = game.choices.map(function (item, i) {
                const isRightAnswer = (item.name === game.answer.name);
                let result;
                if (game.checked) {
                    if (game.selected === item.name) {
                        result = isRightAnswer ? 'selectedRight' : 'selectedWrong';
                    } else {
                        result = isRightAnswer ? 'answerRight' : 'none';
                    }
                }
                return (
                    <Character key={i}>
                        <Character.RadioBtn id={i} name="character" onClick={() => selectCharacter(item.name)}
                                            disabled={game.checked}
                                            result={result}/>
                        <label htmlFor={i}>
                            <Character.Figure>
                                <Character.Image
                                    src={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}/>
                                <Character.Caption
                                    checked={game.checked}>{game.checked ? item.name : i + 1}</Character.Caption>
                            </Character.Figure>
                        </label>
                    </Character>
                )
            });
        }

        return (<FlexGrid>{gridItems}</FlexGrid>)
    }

    render() {
        const {game, isGameLoading, passQuestion, checkAnswer, nextQuestion, jarvigSettings, isHintOpen, toggleHint} = this.props;

        const questionNumber = game.checked ? game.result.length : game.result.length + 1;

        let isRightAnswer = false;
        if (game.answer) {
            isRightAnswer = (game.selected === game.answer.name);
        }

        let cardTitle, cardBody, actions;
        if (game.checked) {
            if (isRightAnswer) {
                cardTitle = ['Correct, well done!'];
            } else {
                cardTitle = ['Wrong, you can do better!'];
            }
            const isLastGame = ((questionNumber === jarvigSettings.numberOfQuestions) || game.remainingLives === 0);
            actions = <Card.ActionContainer>
                <Card.ActionBtn accent={!isLastGame} primary={isLastGame} dark onClick={() => nextQuestion()}>
                    {isLastGame ? 'Check results' : 'Next question'} <FaArrowRight/>
                </Card.ActionBtn>
            </Card.ActionContainer>;
            cardBody = isLastGame ? 'The game has ended, check your score!' : 'Press Next to get to the next question!';
        } else {
            cardTitle = ['Can you find', ' ', <Emphasis>{game.answer ? game.answer.name : ''}</Emphasis>, '?'];
            cardBody = `Choose a character and check your answer!`;
            actions = <Card.ActionContainer>
                <Card.ActionBtn primary dark half
                                onClick={() => passQuestion()}>Pass</Card.ActionBtn>
                <Card.ActionBtn accent2 dark half disabled={!game.selected}
                                onClick={() => checkAnswer(isRightAnswer)}>Check</Card.ActionBtn>
            </Card.ActionContainer>;
        }


        return (
            <PlayDiv>
                {isGameLoading && 'Loading question...'}
                <FlexAside half>
                    {game.choices &&
                    <Card>
                        <Card.Ribbon>Question {questionNumber}/{jarvigSettings.numberOfQuestions}</Card.Ribbon>
                        {(jarvigSettings.hints && game.answer.description !== '') && (
                            <div>
                                <Card.Hint onClick={() => toggleHint()}>{isHintOpen ? <TiTimes/> :
                                    <TiLightbulb/>}</Card.Hint>
                                <Card.HintMessage hidden={!isHintOpen}>
                                    <Paragraph justify light>{game.answer ? game.answer.description : ''}</Paragraph>
                                </Card.HintMessage>
                            </div>
                        )}
                        <Card.Title>
                            {cardTitle.map(function (name, index) {
                                return <span key={index}>{name}</span>
                            })}
                        </Card.Title>
                        <Card.BodyContainer>
                            <Card.BodyParagraph center sm>{cardBody}</Card.BodyParagraph>
                        </Card.BodyContainer>
                        {actions}
                    </Card>
                    }
                </FlexAside>
                <FlexSection spaceRight spaceLeft play>
                    {this.charactersGrid()}
                </FlexSection>
            </PlayDiv>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.jarvig.characters,
        jarvigSettings: state.jarvig.settings,
        game: state.jarvig.game,
        isGameLoading: state.jarvig.fetching,
        isHintOpen: state.ui.isHintOpen,
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        resetSidebars: resetSidebars,
        toggleHint: toggleHint,
        initNewGame: initNewGame,
        callRequest: callRequest,
        selectCharacter: selectCharacter,
        checkAnswer: checkAnswer,
        nextQuestion: nextQuestion,
        passQuestion: passQuestion,
        endGame: endGame,
        redirect: push,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayScreen);
