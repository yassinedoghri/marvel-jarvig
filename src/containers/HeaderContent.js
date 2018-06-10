import React, { Component } from "react";
import PropTypes from "prop-types";
import Routes from "constants/routes";

import TimerMachine from "react-timer-machine";

import { endGame, saveGameTime } from "actions/GameActions";
import { GameUI, Header, Logo } from "components/index";
import iconJarvig from "containers/icon-jarvig.svg";
import logo from "containers/MarvelLogo.svg";
import FaClock from "react-icons/lib/fa/clock-o";

import FaHeart from "react-icons/lib/fa/heart";

import TiChevronLeft from "react-icons/lib/ti/chevron-left";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "react-router-redux";
import { bindActionCreators, compose } from "redux";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

class HeaderContent extends Component {
  handleTimerPaused(time) {
    const { game, saveGameTime } = this.props;

    if (game.time !== time) {
      saveGameTime(time);
    }
  }

  handleTimerEnd(time) {
    const { endGame, push, saveGameTime } = this.props;

    endGame();
    saveGameTime(time);
    push(Routes.Results);
  }

  render() {
    const { location, time, game, isLoading, error } = this.props;

    const isGamePaused =
      isLoading || // if game is loading
      game.answer === null || // if the question didn't load
      game.checked || // if the player checked his answer
      game.over || // if the game is over
      Boolean(error); // if an error occurred

    return (
      location.pathname !== Routes.Home && (
        <Header>
          <Logo inline="true" mobileicon="true" to="/" title="Go Home">
            <TiChevronLeft />
            <Logo.MarvelLogo sm src={logo} alt="Marvel Logo" />
            <Logo.JarvigText sm spaceLeft>
              JARVIG
            </Logo.JarvigText>
            <Logo.Icon src={iconJarvig} alt="Marvel Jarvig icon" />
          </Logo>
          <GameUI>
            <GameUI.Item>
              <GameUI.Icon>
                <FaClock />
              </GameUI.Icon>
              <GameUI.Label blink={isGamePaused}>
                <TimerMachine
                  countdown
                  started={!game.over}
                  timeStart={time * 60 * 1000}
                  formatTimer={(time, ms) =>
                    moment.duration(ms, "milliseconds").format("h:mm:ss")
                  }
                  paused={isGamePaused}
                  onPause={time => this.handleTimerPaused(time)}
                  onComplete={time => this.handleTimerEnd(time)}
                />
              </GameUI.Label>
            </GameUI.Item>
            <GameUI.Item>
              <GameUI.Icon animated>
                <FaHeart />
              </GameUI.Icon>
              <GameUI.Label>{game.remainingLives}</GameUI.Label>
            </GameUI.Item>
          </GameUI>
        </Header>
      )
    );
  }
}

HeaderContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  game: PropTypes.shape({
    answer: PropTypes.object,
    checked: PropTypes.bool,
    over: PropTypes.bool,
    result: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  time: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  endGame: PropTypes.func.isRequired,
  saveGameTime: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

HeaderContent.defaultProps = {
  error: null
};

const mapStateToProps = state => ({
  time: state.jarvig.settings.time,
  game: state.jarvig.game,
  isLoading: state.jarvig.fetching,
  error: state.jarvig.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push,
      endGame,
      saveGameTime
    },
    dispatch
  );

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderContent);
