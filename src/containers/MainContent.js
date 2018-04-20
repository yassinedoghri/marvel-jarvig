import React, {Component} from 'react';
import {Main} from '../components';
import {Switch, Route, withRouter} from 'react-router-dom'

import HomeScreen from './HomeScreen';
import PlayScreen from './PlayScreen';
import ResultScreen from './ResultScreen';

class MainContent extends Component {
    render() {
        const {location} = this.props;
        return (
            <Main isHome={location.pathname === '/'}>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route path='/play' component={PlayScreen}/>
                    <Route path='/result' component={ResultScreen}/>
                </Switch>
            </Main>
        );
    }
}

export default withRouter(MainContent);
