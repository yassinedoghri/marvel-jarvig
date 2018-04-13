import React, {Component} from 'react';
import {Header, SearchBar, Logo, GameUI} from '../components';
import logo from './MarvelLogo.svg';
import {withRouter} from 'react-router-dom';


import FaSearch from 'react-icons/lib/fa/search';
import FaHeart from 'react-icons/lib/fa/heart';
import FaClock from 'react-icons/lib/fa/clock-o';


class HeaderContent extends Component {
    render() {
        const {pathname} = this.props.location;

        const content = pathname === '/' ? (
            <Header>
                <SearchBar>
                    <SearchBar.Icon><FaSearch/></SearchBar.Icon>
                    <SearchBar.Input type="search" placeholder="Search characters..."/>
                </SearchBar>
            </Header>
        ) : (
            <Header>
                <Logo inline="true" to="/">
                    <Logo.MarvelLogo sm src={logo} alt="Marvel Logo"/>
                    <Logo.JarvigText sm spaceLeft>JARVIG</Logo.JarvigText>
                </Logo>
                <GameUI>
                    <GameUI.Item>
                        <GameUI.Item.Icon><FaHeart/></GameUI.Item.Icon>
                        <GameUI.Item.Label>x3</GameUI.Item.Label>
                    </GameUI.Item>
                    <GameUI.Item>
                        <GameUI.Item.Icon><FaClock/></GameUI.Item.Icon>
                        <GameUI.Item.Label>2:35</GameUI.Item.Label>
                    </GameUI.Item>
                </GameUI>
            </Header>
        );

        return content;
    }
}

export default withRouter(HeaderContent);
