import React, {Component} from 'react';
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";

import {Header, Logo, GameUI} from '../components';
import logo from './MarvelLogo.svg';

import FaHeart from 'react-icons/lib/fa/heart';
import FaClock from 'react-icons/lib/fa/clock-o';
import {connect} from "react-redux";
import Countdown from "./Countdown";
import {push} from "react-router-redux";
import {endGame} from "../actions/GameActions";

class HeaderContent extends Component {

    handleCountdownEnd() {
        const {redirect, endGame} = this.props;

        endGame();
        redirect('/result');
    }

    render() {
        const {location, jarvigSettings, game, isLoading, error} = this.props;

        const content = location.pathname === '/' ? (
            <Header>
                {/*<SearchBar>*/}
                {/*<SearchBar.Icon><FaSearch/></SearchBar.Icon>*/}
                {/*<SearchBar.Input type="search" placeholder="Search characters..."/>*/}
                {/*</SearchBar>*/}
            </Header>
        ) : (
            <Header>
                <Logo inline="true" to="/">
                    <Logo.MarvelLogo sm src={logo} alt="Marvel Logo"/>
                    <Logo.JarvigText sm spaceLeft>JARVIG</Logo.JarvigText>
                </Logo>
                <GameUI>
                    <GameUI.Item>
                        <GameUI.Item.Icon><FaClock/></GameUI.Item.Icon>
                        <Countdown from={jarvigSettings.time * 60}
                                   isGamePaused={isLoading || game.checked || game.over || error}
                                   onCountdownEnd={() => this.handleCountdownEnd()}
                                   result={game.result}
                        />
                    </GameUI.Item>
                    <GameUI.Item>
                        <GameUI.Item.Icon><FaHeart/></GameUI.Item.Icon>
                        <GameUI.Item.Label>{game.remainingLives}</GameUI.Item.Label>
                    </GameUI.Item>
                </GameUI>
            </Header>
        );

        return content;
    }
}

const mapStateToProps = (state) => {
    return {
        jarvigSettings: state.jarvig.settings,
        game: state.jarvig.game,
        isLoading: state.jarvig.fetching,
        error: state.jarvig.error,
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        redirect: push,
        endGame: endGame,
    }, dispatch)
);


export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
)(HeaderContent);
