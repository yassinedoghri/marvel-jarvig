import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {push} from 'react-router-redux'

import {FlexSection, FlexGrid, Character, Card, FlexAside, PlayDiv, Emphasis, Paragraph, AttributionText, Loader} from "../../components";
import {resetSidebars, toggleHint} from "../../actions/UIActions";
import {
    callRequest,
    checkAnswer,
    initNewGame,
    passQuestion,
    nextQuestion,
    selectCharacter,
    endGame, clearGame,
} from "../../actions/GameActions";

import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import TiLightbulb from 'react-icons/lib/ti/lightbulb';
import TiTimes from 'react-icons/lib/ti/times';
import FaHome from 'react-icons/lib/fa/home';

class PlayScreen extends Component {
    constructor(props) {
        super(props);

        const {initNewGame, clearGame, redirect, history} = this.props;

        if (history.action === 'POP') {
            redirect('/');
        } else {
            console.log('TESSSTT');
            // clear all jarvig state (set defaults)
            clearGame();
            // init new jarvig;
            initNewGame();
        }
    }

    componentDidMount() {
        const {resetSidebars} = this.props;
        resetSidebars();
    }

    componentDidUpdate() {
        const {callRequest, game, jarvigSettings, redirect, endGame, error} = this.props;
        // if choices haven't been set, call request and set choices

        // BAD PRACTICE to call action creators on lifecycle methods
        if (!game.choices && !error) {
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
        const {game, isGameLoading, passQuestion, checkAnswer, nextQuestion, jarvigSettings, isHintOpen, toggleHint, error, attributionText} = this.props;

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
                cardTitle = ['Too bad, you can do better!'];
            }
            const isLastGame = ((questionNumber === jarvigSettings.numberOfQuestions) || game.remainingLives === 0);
            actions = <Card.ActionContainer>
                <Card.ActionBtn accent={!isLastGame} primary={isLastGame} dark onClick={() => nextQuestion()}>
                    {isLastGame ? 'Check results' : 'Next question'} <FaArrowRight/>
                </Card.ActionBtn>
            </Card.ActionContainer>;
            cardBody = isLastGame ? 'The game has ended, check your score!' : 'Press Next to get a new question!';
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
            isGameLoading ? (
                <PlayDiv>
                    <Loader>
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </Loader>
                </PlayDiv>
            ) : (
                error ? (
                    <PlayDiv space>
                        <Card alignCenter>
                            <Card.Ribbon background="primary">error!</Card.Ribbon>
                            <Card.Title>Oops, looks like something happened with the Marvel API...</Card.Title>
                            <Card.BodyContainer>
                                <Card.BodyParagraph center>Message: {error.message}</Card.BodyParagraph>
                                <Card.BodyParagraph center>Try again later!</Card.BodyParagraph>
                            </Card.BodyContainer>
                            <Card.ActionContainer>
                                <Card.ActionLink to="/" accent2="true" dark="true"><FaHome/> Home</Card.ActionLink>
                            </Card.ActionContainer>
                        </Card>
                    </PlayDiv>
                ) : (
                    <PlayDiv>
                        {game.choices &&
                        <FlexAside half>
                            <Card animation={game.checked ? (isRightAnswer ? 'correct': 'incorrect') : 'false'}>
                                <Card.Ribbon background={game.checked ? (isRightAnswer ? 'accent2': 'primary') : 'default'}>
                                    Question {questionNumber}/{jarvigSettings.numberOfQuestions}
                                </Card.Ribbon>
                                {(jarvigSettings.hints && game.answer.description !== '') && (
                                    <div>
                                        <Card.Hint onClick={() => toggleHint()}>{isHintOpen ? <TiTimes/> :
                                            <TiLightbulb/>}</Card.Hint>
                                        <Card.HintMessage hidden={!isHintOpen}>
                                            <Paragraph justify
                                                       light>{game.answer ? game.answer.description : ''}</Paragraph>
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
                        </FlexAside>
                        }
                        <FlexSection spaceRight spaceLeft spaceDown>
                            {this.charactersGrid()}
                            <AttributionText sm>{attributionText}</AttributionText>
                        </FlexSection>
                    </PlayDiv>
                )
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.jarvig.characters,
        jarvigSettings: state.jarvig.settings,
        game: state.jarvig.game,
        isGameLoading: state.jarvig.fetching,
        error: state.jarvig.error,
        isHintOpen: state.ui.isHintOpen,
        attributionText: state.jarvig.attributionText,
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        resetSidebars: resetSidebars,
        toggleHint: toggleHint,
        initNewGame: initNewGame,
        clearGame: clearGame,
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
