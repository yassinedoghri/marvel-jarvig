import React, {Component} from 'react';
import {compose} from "redux";
import {withRouter} from 'react-router-dom';

import {Header, Logo, GameUI} from '../components';
import logo from './MarvelLogo.svg';

import FaHeart from 'react-icons/lib/fa/heart';
import FaClock from 'react-icons/lib/fa/clock-o';
import {connect} from "react-redux";
import Countdown from "./Countdown";

class HeaderContent extends Component {
    render() {
        const {location, jarvigSettings, jarvig} = this.props;

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
                        <Countdown from={jarvigSettings.time * 60}/>
                    </GameUI.Item>
                    <GameUI.Item>
                        <GameUI.Item.Icon><FaHeart/></GameUI.Item.Icon>
                        <GameUI.Item.Label>{jarvig.remainingLives}</GameUI.Item.Label>
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
        jarvig: state.jarvig.game,
    }
};

export default compose(
    withRouter,
    connect(
        mapStateToProps,
    ),
)(HeaderContent);
