import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FlexSection, Card } from "components";
import CountUp from "react-countup";

import { push } from "react-router-redux";
import { getArrayCounts } from "helpers";

import FaRepeat from "react-icons/lib/fa/repeat";
import FaHome from "react-icons/lib/fa/home";

class ResultScreen extends Component {
  constructor(props) {
    super(props);

    const { push, history } = this.props;

    if (history.action === "POP") {
      push("/");
    }
  }

  render() {
    const { numberOfQuestions, gameResult, difficulty } = this.props;

    const resultCounts = getArrayCounts(gameResult);

    const rightAnswers = resultCounts[1] ? resultCounts[1] : 0;
    // const wrongAnswers = resultCounts[0] ? resultCounts[0] : 0;
    // const unanswered = (numberOfQuestions - (rightAnswers + wrongAnswers));

    const resultPercentage = rightAnswers / numberOfQuestions * 100;

    let cardMessage = "";
    if (resultPercentage < 20) {
      cardMessage = "It's quite awful, you need more practice!";
    } else if (resultPercentage < 50) {
      cardMessage = "A bit more practice and you'll get there!";
    } else if (resultPercentage < 70) {
      cardMessage = "Well done, you're getting there!";
    } else if (resultPercentage < 90) {
      cardMessage = "Well, that's quite impressive!";
    } else if (resultPercentage < 99) {
      cardMessage = "Wow, you're close to perfection!";
    } else {
      cardMessage = "Perfect! That's just amazing, teach me master!";
    }

    return (
      <FlexSection spaceTop spaceRight spaceLeft>
        <Card alignCenter>
          <Card.Ribbon>Game Over!</Card.Ribbon>
          <Card.Title>{cardMessage}</Card.Title>
          <Card.BodyContainer>
            <Card.BodyResult>
              <CountUp start={0} end={resultPercentage} />%
            </Card.BodyResult>
            <Card.BodyParagraph center>
              Difficulty: {difficulty}
            </Card.BodyParagraph>
          </Card.BodyContainer>
          <Card.ActionContainer>
            <Card.ActionLink to="/play" half="true" accent="true" dark="true">
              <FaRepeat /> Restart
            </Card.ActionLink>
            <Card.ActionLink to="/" half="true" accent2="true" dark="true">
              <FaHome /> Home
            </Card.ActionLink>
          </Card.ActionContainer>
        </Card>
      </FlexSection>
    );
  }
}

ResultScreen.propTypes = {
  numberOfQuestions: PropTypes.number.isRequired,
  gameResult: PropTypes.arrayOf(PropTypes.string).isRequired,
  difficulty: PropTypes.string.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string
  }).isRequired,
  push: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  numberOfQuestions: state.jarvig.settings.numberOfQuestions,
  gameResult: state.jarvig.game.result,
  difficulty: state.jarvig.difficulty
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
