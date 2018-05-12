import {
  callRequest,
  checkAnswer,
  clearGame,
  endGame,
  initNewGame,
  nextQuestion,
  passQuestion,
  selectCharacter
} from "actions/GameActions";
import { resetSidebars, toggleHint } from "actions/UIActions";

import {
  AttributionText,
  ChoicesSection,
  Loader,
  PlaySection
} from "components";

import CharactersGrid from "containers/PlayScreen/CharactersGrid";
import ErrorCard from "containers/PlayScreen/ErrorCard";
import QuestionCard from "containers/PlayScreen/QuestionCard";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";

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
      error,
      isGameLoading
    } = this.props;
    // if choices haven't been set, call request and set choices

    if (!game.choices && !error) {
      // check if all questions have been answered and there are lives remaining
      if (
        game.result.length < jarvigSettings.numberOfQuestions &&
        game.remainingLives > 0
      ) {
        // New Question: get new characters from Marvel API and set choices
        // Make sure it's called only once when game is not loading
        if (!isGameLoading) {
          callRequest();
        }
      } else {
        console.info("Game Over.");
        // Quizz is over: end game and redirect to results page
        endGame();
        push("/result");
      }
    }
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
      attributionText,
      selectCharacter
    } = this.props;

    let gameScreen = (
      <PlaySection>
        <Loader />
      </PlaySection>
    );
    if (!isGameLoading) {
      if (error) {
        gameScreen = (
          <PlaySection>
            <ErrorCard error={error} />
          </PlaySection>
        );
      } else {
        gameScreen = (
          <PlaySection>
            {game.choices && (
              <QuestionCard
                game={game}
                passQuestion={passQuestion}
                checkAnswer={checkAnswer}
                nextQuestion={nextQuestion}
                jarvigSettings={jarvigSettings}
                isHintOpen={isHintOpen}
                toggleHint={toggleHint}
              />
            )}
            <ChoicesSection>
              <CharactersGrid game={game} selectCharacter={selectCharacter} />
              <AttributionText sm>{attributionText}</AttributionText>
            </ChoicesSection>
          </PlaySection>
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
  checkAnswer: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  passQuestion: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
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
