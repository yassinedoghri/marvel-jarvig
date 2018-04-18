import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import logo from '../MarvelLogo.svg';
import {FlexSection, Logo, PlayButton, PlayMode} from "../../components";
import {clearGame} from "../../actions/GameActions";
import {toggleSidebar} from "../../actions/UIActions";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        const {clearGame} = this.props;

        // clear all jarvig state (set defaults)
        clearGame();
    }

    render() {
        const {difficulty, toggleSidebar} = this.props;

        return (
            <FlexSection spaceTop>
                <Logo center="true" to="/">
                    <Logo.MarvelLogo src={logo} alt="Marvel Logo" />
                    <Logo.JarvigText>JARVIG</Logo.JarvigText>
                </Logo>
                <PlayButton to="/play">Play!</PlayButton>
                <PlayMode>Difficulty: <button title="Open Settings"
                onClick={() => toggleSidebar('settings')}>{difficulty}</button></PlayMode>
            </FlexSection>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        difficulty: state.jarvig.difficulty,
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        clearGame: clearGame,
        toggleSidebar: toggleSidebar,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
