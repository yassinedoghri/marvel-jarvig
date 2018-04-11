import React, {Component} from 'react';
import logo from './MarvelLogo.svg';
import {Copyright, SearchBar, Logo, Header, Content, FLexWrapper, Footer, Toolbar, Paragraph, Sidebar, Settings, PlayButton, HR} from "../components";
import {ThemeProvider} from 'styled-components';
import theme from "../theme";

import FaSearch from 'react-icons/lib/fa/search';
import FaVolume from 'react-icons/lib/fa/volume-off';
import FaCog from 'react-icons/lib/fa/cog';
import FaInfo from 'react-icons/lib/fa/info-circle';
import TiTimesOutline from 'react-icons/lib/ti/times-outline';

import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <FLexWrapper>
                    <Header>
                        <SearchBar>
                            <SearchBar.Icon><FaSearch /></SearchBar.Icon>
                            <SearchBar.Input type="search" placeholder="Search characters..." />
                        </SearchBar>
                    </Header>
                    <Content>
                        <Logo>
                            <Logo.MarvelLogo src={logo} alt="Marvel Logo" />
                            <Logo.JarvigText>JARVIG</Logo.JarvigText>
                        </Logo>
                        <PlayButton center lg>Play!</PlayButton>
                    </Content>
                    <Footer>
                        <Toolbar>
                            <Toolbar.Item md><FaVolume /></Toolbar.Item>
                            <Toolbar.Item md><FaCog /></Toolbar.Item>
                            <Toolbar.Item md><FaInfo /></Toolbar.Item>
                        </Toolbar>
                        <Copyright>Created by Yassine Doghri © 2018 ekino.</Copyright>
                    </Footer>
                    <Sidebar>
                        <Sidebar.Title>Game Parameters</Sidebar.Title>
                        <Sidebar.CloseButton><TiTimesOutline /></Sidebar.CloseButton>
                        <Sidebar.Content>
                            <Settings>
                                <Settings.Text>Tweak your parameters to better suit your level!</Settings.Text>
                                <Select
                                    name="degree-difficulty"
                                    value='medium'
                                    onChange={0}
                                    options={[
                                        { value: 'easy', label: 'Meh' },
                                        { value: 'medium', label: 'Medium' },
                                        { value: 'hard', label: 'Master' },
                                        { value: 'custom', label: 'Custom' },
                                    ]}
                                />
                                <Settings.Item>
                                    <Settings.Item.Label>Game time (min)</Settings.Item.Label>
                                    <Settings.Item.Counter>5</Settings.Item.Counter>
                                    <Slider
                                        defaultValue={5}
                                        min={1}
                                        max={30}
                                    />
                                </Settings.Item>
                                <Settings.Item>
                                    <Settings.Item.Label>Number of Questions</Settings.Item.Label>
                                    <Settings.Item.Counter>10</Settings.Item.Counter>
                                    <Slider
                                        defaultValue={10}
                                        min={1}
                                        max={30}
                                    />
                                </Settings.Item>
                                <Settings.Item>
                                    <Settings.Item.Label>Characters per question</Settings.Item.Label>
                                    <Settings.Item.Counter>3</Settings.Item.Counter>
                                    <Slider
                                        defaultValue={3}
                                        min={2}
                                        max={12}
                                    />
                                </Settings.Item>
                            </Settings>
                        </Sidebar.Content>
                    </Sidebar>
                    <Sidebar>
                        <Sidebar.Title>What is it about?</Sidebar.Title>
                        <Sidebar.CloseButton><TiTimesOutline /></Sidebar.CloseButton>
                        <Sidebar.Content>
                            <Paragraph light>
                                J.A.R.V.I.G. (Just A Rather Very Interesting Game) lets you find and discover Marvel Comics characters based on their name, image and description!
                            </Paragraph>
                            <Paragraph light>
                                It's a game! So, you can tweak some settings before playing, have fun!
                            </Paragraph>
                            <HR/>
                            <Paragraph light sm>
                                Developed by me (Yassine Doghri) during ekino's onboarding.
                            </Paragraph>
                            <Paragraph light sm>v0.1.0</Paragraph>
                        </Sidebar.Content>
                    </Sidebar>
                </FLexWrapper>
            </ThemeProvider>
        );
    }
}

export default App;
