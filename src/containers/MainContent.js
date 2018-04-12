import React, {Component} from 'react';
import {Main} from '../components';
import {Switch, Route} from 'react-router-dom'

import HomeScreen from './HomeScreen';
import PlayScreen from './PlayScreen';

class MainContent extends Component {
    render() {
        return (
            <Main>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route path='/play' component={PlayScreen}/>
                </Switch>
            </Main>
        );
    }
}

export default MainContent;
