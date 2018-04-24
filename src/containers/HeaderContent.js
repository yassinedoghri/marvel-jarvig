import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";

import { GameUI, Header, Logo } from "components/index";
import logo from "containers/MarvelLogo.svg";

import FaHeart from "react-icons/lib/fa/heart";
import FaClock from "react-icons/lib/fa/clock-o";
import { connect } from "react-redux";
import Countdown from "containers/Countdown";
import { push } from "react-router-redux";
import { endGame } from "actions/GameActions";
import PropTypes from "prop-types";

class HeaderContent extends Component {
  handleCountdownEnd() {
    const { endGame, push } = this.props;

    endGame();
    push("/result");
  }

  render() {
    const { location, time, game, isLoading, error } = this.props;

    return (
      location.pathname !== "/" && (
        <Header>
          <Logo inline="true" to="/">
            <Logo.MarvelLogo sm src={logo} alt="Marvel Logo" />
            <Logo.JarvigText sm spaceLeft>
              JARVIG
            </Logo.JarvigText>
          </Logo>
          <GameUI>
            <GameUI.Item>
              <GameUI.Item.Icon>
                <FaClock />
              </GameUI.Item.Icon>
              <Countdown
                from={time * 60}
                isGamePaused={isLoading || game.checked || game.over || error}
                onCountdownEnd={() => this.handleCountdownEnd()}
                result={game.result}
              />
            </GameUI.Item>
            <GameUI.Item>
              <GameUI.Item.Icon animated="true">
                <FaHeart />
              </GameUI.Item.Icon>
              <GameUI.Item.Label>{game.remainingLives}</GameUI.Item.Label>
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
      endGame
    },
    dispatch
  );

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderContent);
