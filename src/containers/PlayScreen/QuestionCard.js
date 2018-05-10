import { Card, Emphasis, Paragraph } from "components";
import PropTypes from "prop-types";
import React, { Component } from "react";

import FaArrowRight from "react-icons/lib/fa/arrow-right";
import TiLightbulb from "react-icons/lib/ti/lightbulb";
import TiTimes from "react-icons/lib/ti/times";

class QuestionCard extends Component {
  render() {
    const {
      game,
      passQuestion,
      checkAnswer,
      nextQuestion,
      jarvigSettings,
      isHintOpen,
      toggleHint
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
        cardTitle = {
          1: <Emphasis color="accent2">Correct, well done!</Emphasis>
        };
      } else {
        cardTitle = {
          1: <Emphasis color="primary">Too bad, you can do better!</Emphasis>
        };
      }
      const isLastGame =
        questionNumber === jarvigSettings.numberOfQuestions ||
        game.remainingLives === 0;
      actions = (
        <Card.ActionContainer>
          <Card.ActionBtn
            backgroundcolor={isLastGame ? "primary" : "accent"}
            color="contrastDark"
            onClick={() => nextQuestion()}
            iconright="true"
          >
            <FaArrowRight />
            <span>{isLastGame ? "Check results" : "Next question"}</span>
          </Card.ActionBtn>
        </Card.ActionContainer>
      );
      cardBody = isLastGame
        ? "The game has ended, check your score!"
        : "Press Next to get a new question!";
    } else {
      cardTitle = {
        1: "Can you find ",
        2: (
          <Emphasis color="foreground">
            {game.answer ? game.answer.name : ""}
          </Emphasis>
        ),
        3: "?"
      };
      cardBody = "Choose a character and check your answer!";
      actions = (
        <Card.ActionContainer>
          <Card.ActionBtn
            backgroundcolor="primary"
            color="contrastDark"
            half
            onClick={() => passQuestion()}
          >
            <span>Pass</span>
          </Card.ActionBtn>
          <Card.ActionBtn
            backgroundcolor="accent2"
            color="contrastDark"
            half
            disabled={!game.selected}
            onClick={() => checkAnswer(isRightAnswer)}
          >
            <span>Check</span>
          </Card.ActionBtn>
        </Card.ActionContainer>
      );
    }

    let color = "foreground";
    let animation = "none";
    if (game.checked) {
      color = isRightAnswer ? "accent2" : "primary";
      animation = isRightAnswer ? "correct" : "incorrect";
    }

    return (
      <Card animation={animation} isAside>
        <Card.Ribbon backgroundcolor={color}>
          Question {questionNumber}/{jarvigSettings.numberOfQuestions}
        </Card.Ribbon>
        {jarvigSettings.hints &&
          game.answer.description !== "" && [
            <Card.Hint key={1} onClick={() => toggleHint()}>
              {isHintOpen ? <TiTimes /> : <TiLightbulb />}
            </Card.Hint>,
            <Card.HintMessage key={2} hidden={!isHintOpen}>
              <Paragraph justify light>
                {game.answer ? game.answer.description : ""}
              </Paragraph>
            </Card.HintMessage>
          ]}
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
    );
  }
}

QuestionCard.propTypes = {
  jarvigSettings: PropTypes.shape({
    numberOfQuestions: PropTypes.number,
    hints: PropTypes.bool
  }).isRequired,
  game: PropTypes.shape({
    answer: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    }),
    checked: PropTypes.bool,
    selected: PropTypes.string
  }).isRequired,
  isHintOpen: PropTypes.bool.isRequired,
  toggleHint: PropTypes.func.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  passQuestion: PropTypes.func.isRequired
};

export default QuestionCard;
