import React, { Component } from 'react';
import logo from './logo.svg';
import {Wrapper, Logo, Header, Intro} from './styles';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
