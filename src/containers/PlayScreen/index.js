import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { push } from "react-router-redux";

import {
  FlexSection,
  FlexGrid,
  Character,
  Card,
  FlexAside,
  PlayDiv,
  Emphasis,
  Paragraph,
  AttributionText,
  Loader
} from "components";
import { resetSidebars, toggleHint } from "actions/UIActions";
import {
  callRequest,
  checkAnswer,
  initNewGame,
  passQuestion,
  nextQuestion,
  selectCharacter,
  endGame,
  clearGame
} from "actions/GameActions";

import FaArrowRight from "react-icons/lib/fa/arrow-right";
import TiLightbulb from "react-icons/lib/ti/lightbulb";
import TiTimes from "react-icons/lib/ti/times";
import TiTimesOutline from "react-icons/lib/ti/times-outline";
import TiTickOutline from "react-icons/lib/ti/tick-outline";
import ErrorCard from "containers/PlayScreen/ErrorCard";

class PlayScreen extends Component {
  constructor(props) {
    super(props);

    const { initNewGame, clearGame, push, history } = this.props;

    if (history.action === "POP") {
      push("/");
    } else {
      // clear all jarvig state (set defaults)
      clearGame();
      // init new jarvig;
      initNewGame();
    }
  }

  componentDidMount() {
    const { resetSidebars } = this.props;
    resetSidebars();
  }

  componentDidUpdate() {
    const {
      callRequest,
      game,
      jarvigSettings,
      push,
      endGame,
      error
    } = this.props;
    // if choices haven't been set, call request and set choices

    // BAD PRACTICE to call action creators on lifecycle methods
    if (!game.choices && !error) {
      // check if all questions have been answered and there are lives remaining
      if (
        game.result.length < jarvigSettings.numberOfQuestions &&
        game.remainingLives > 0
      ) {
        // New Question: get new characters and set choices
        callRequest();
      } else {
        console.info("Game Over.");
        // Quizz is over: end game and redirect to results page
        endGame();
        push("/result");
      }
    }
  }

  charactersGrid() {
    const { game, selectCharacter } = this.props;

    let gridItems = "";
    if (game.choices) {
      gridItems = game.choices.map((item, i) => {
        const isRightAnswer = item.name === game.answer.name;
        let result;
        if (game.checked) {
          if (game.selected === item.name) {
            result = isRightAnswer ? "selectedRight" : "selectedWrong";
          } else {
            result = isRightAnswer ? "answerRight" : "none";
          }
        }

        let isRightAnswerString = "none";
        if (game.checked) {
          isRightAnswerString = isRightAnswer ? "correct" : "incorrect";
        }

        return (
          <Character key={item.id}>
            <Character.RadioBtn
              id={i}
              name="character"
              onClick={() => selectCharacter(item.name)}
              disabled={game.checked}
              result={result}
            />
            <label htmlFor={i}>
              <Character.Figure>
                {game.selected === item.name && (
                  <Character.CheckBadge answer={isRightAnswerString}>
                    {isRightAnswer ? <TiTickOutline /> : <TiTimesOutline />}
                  </Character.CheckBadge>
                )}
                <Character.Image
                  src={`${item.thumbnail.path}/standard_large.${
                    item.thumbnail.extension
                  }`}
                />
                <Character.Caption checked={game.checked}>
                  {game.checked ? item.name : i + 1}
                </Character.Caption>
              </Character.Figure>
            </label>
          </Character>
        );
      });
    }

    return <FlexGrid>{gridItems}</FlexGrid>;
  }

  render() {
    const {
      game,
      isGameLoading,
      passQuestion,
      checkAnswer,
      nextQuestion,
      jarvigSettings,
      isHintOpen,
      toggleHint,
      error,
      attributionText
    } = this.props;

    const questionNumber = game.checked
      ? game.result.length
      : game.result.length + 1;

    let isRightAnswer = false;
    if (game.answer) {
      isRightAnswer = game.selected === game.answer.name;
    }

    let cardTitle;
    let cardBody;
    let actions;
    if (game.checked) {
      if (isRightAnswer) {
        cardTitle = { 1: "Correct, well done!" };
      } else {
        cardTitle = { 1: "Too bad, you can do better!" };
      }
      const isLastGame =
        questionNumber === jarvigSettings.numberOfQuestions ||
        game.remainingLives === 0;
      actions = (
        <Card.ActionContainer>
          <Card.ActionBtn
            accent={!isLastGame}
            primary={isLastGame}
            dark
            onClick={() => nextQuestion()}
          >
            {isLastGame ? "Check results" : "Next question"} <FaArrowRight />
          </Card.ActionBtn>
        </Card.ActionContainer>
      );
      cardBody = isLastGame
        ? "The game has ended, check your score!"
        : "Press Next to get a new question!";
    } else {
      cardTitle = {
        1: "Can you find ",
        2: <Emphasis>{game.answer ? game.answer.name : ""}</Emphasis>,
        3: "?"
      };
      cardBody = "Choose a character and check your answer!";
      actions = (
        <Card.ActionContainer>
          <Card.ActionBtn primary dark half onClick={() => passQuestion()}>
            Pass
          </Card.ActionBtn>
          <Card.ActionBtn
            accent2
            dark
            half
            disabled={!game.selected}
            onClick={() => checkAnswer(isRightAnswer)}
          >
            Check
          </Card.ActionBtn>
        </Card.ActionContainer>
      );
    }

    let color = "default";
    let animation = "none";
    if (game.checked) {
      color = isRightAnswer ? "accent2" : "primary";
      animation = isRightAnswer ? "correct" : "incorrect";
    }

    let gameScreen = (
      <PlayDiv>
        <Loader>
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </Loader>
      </PlayDiv>
    );
    if (!isGameLoading) {
      if (error) {
        gameScreen = (
          <PlayDiv>
            <ErrorCard error={error} />
          </PlayDiv>
        );
      } else {
        gameScreen = (
          <PlayDiv>
            {game.choices && (
              <FlexAside half>
                <Card animation={animation}>
                  <Card.Ribbon background={color}>
                    Question {questionNumber}/{jarvigSettings.numberOfQuestions}
                  </Card.Ribbon>
                  {jarvigSettings.hints &&
                    game.answer.description !== "" && (
                      <div>
                        <Card.Hint onClick={() => toggleHint()}>
                          {isHintOpen ? <TiTimes /> : <TiLightbulb />}
                        </Card.Hint>
                        <Card.HintMessage hidden={!isHintOpen}>
                          <Paragraph justify light>
                            {game.answer ? game.answer.description : ""}
                          </Paragraph>
                        </Card.HintMessage>
                      </div>
                    )}
                  <Card.Title>
                    {Object.keys(cardTitle).map(item => (
                      <span key={item}>{cardTitle[item]}</span>
                    ))}
                  </Card.Title>
                  <Card.BodyContainer>
                    <Card.BodyParagraph center sm>
                      {cardBody}
                    </Card.BodyParagraph>
                  </Card.BodyContainer>
                  {actions}
                </Card>
              </FlexAside>
            )}
            <FlexSection spaceRight spaceLeft spaceDown>
              {this.charactersGrid()}
              <AttributionText sm>{attributionText}</AttributionText>
            </FlexSection>
          </PlayDiv>
        );
      }
    }

    return gameScreen;
  }
}

PlayScreen.propTypes = {
  jarvigSettings: PropTypes.shape({
    numberOfQuestions: PropTypes.number,
    hints: PropTypes.bool
  }).isRequired,
  game: PropTypes.shape({
    choices: PropTypes.array,
    answer: PropTypes.object,
    checked: PropTypes.bool,
    selected: PropTypes.string,
    remainingLives: PropTypes.number,
    result: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  isGameLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  isHintOpen: PropTypes.bool,
  attributionText: PropTypes.string.isRequired,
  resetSidebars: PropTypes.func.isRequired,
  toggleHint: PropTypes.func.isRequired,
  initNewGame: PropTypes.func.isRequired,
  clearGame: PropTypes.func.isRequired,
  callRequest: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  passQuestion: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string
  }).isRequired
};

PlayScreen.defaultProps = {
  error: null,
  isHintOpen: false
};

const mapStateToProps = state => ({
  jarvigSettings: state.jarvig.settings,
  game: state.jarvig.game,
  isGameLoading: state.jarvig.fetching,
  error: state.jarvig.error,
  isHintOpen: state.ui.isHintOpen,
  attributionText: state.jarvig.attributionText
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetSidebars,
      toggleHint,
      initNewGame,
      clearGame,
      callRequest,
      selectCharacter,
      checkAnswer,
      nextQuestion,
      passQuestion,
      endGame,
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PlayScreen);
