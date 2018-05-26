import { endGame } from "actions/GameActions";

import { GameUI, Header, Logo } from "components/index";
import Routes from "constants/routes";
import Countdown from "containers/Countdown";
import logo from "containers/MarvelLogo.svg";
import iconJarvig from "containers/icon-jarvig.svg";
import PropTypes from "prop-types";
import React, { Component } from "react";
import FaClock from "react-icons/lib/fa/clock-o";

import FaHeart from "react-icons/lib/fa/heart";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { push } from "react-router-redux";
import { bindActionCreators, compose } from "redux";

import TiChevronLeft from "react-icons/lib/ti/chevron-left";

class HeaderContent extends Component {
  handleCountdownEnd() {
    const { endGame, push } = this.props;

    endGame();
    push(Routes.Results);
  }

  render() {
    const { location, time, game, isLoading, error } = this.props;

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
              <Countdown
                from={time * 60}
                isGamePaused={isLoading || game.checked || game.over || error}
                onCountdownEnd={() => this.handleCountdownEnd()}
                result={game.result}
              />
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
