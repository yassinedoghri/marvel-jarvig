import React, {Component} from 'react';
import logo from '../MarvelLogo.svg';
import {FlexSection, Logo, PlayButton} from "../../components";

class HomeScreen extends Component {
    render() {
        return (
            <FlexSection spaceTop>
                <Logo center="true" to="/">
                    <Logo.MarvelLogo src={logo} alt="Marvel Logo" />
                    <Logo.JarvigText>JARVIG</Logo.JarvigText>
                </Logo>
                <PlayButton to="/play">Play!</PlayButton>
            </FlexSection>
        );
    }
}

export default HomeScreen;
