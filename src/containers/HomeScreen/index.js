import { toggleSidebar } from "actions/UIActions";
import { FlexSection, Logo, PlayButton, PlayMode } from "components";

import logo from "containers/MarvelLogo.svg";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class HomeScreen extends Component {
  render() {
    const { difficulty, toggleSidebar } = this.props;

    return (
      <FlexSection>
        <Logo center="true" to="/">
          <Logo.MarvelLogo src={logo} alt="Marvel Logo" />
          <Logo.JarvigText>JARVIG</Logo.JarvigText>
        </Logo>
        <PlayButton to="/play" backgroundcolor="accent2" color="accent">
          Play
        </PlayButton>
        <PlayMode>
          Difficulty:
          <button
            title="Open Settings"
            onClick={() => toggleSidebar("settings")}
          >
            {difficulty}
          </button>
        </PlayMode>
      </FlexSection>
    );
  }
}

HomeScreen.propTypes = {
  difficulty: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  difficulty: state.jarvig.difficulty
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
