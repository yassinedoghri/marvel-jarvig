import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from '../theme';

import {FLexWrapper} from '../components';

import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import MainContent from './MainContent';
import SidebarHelp from './SidebarHelp';
import SidebarSettings from './SidebarSettings';

class App extends Component {
    render() {
        const {location} = this.props;

        return (
            <ThemeProvider theme={theme}>
                <FLexWrapper>
                    <HeaderContent/>
                    <MainContent/>
                    <FooterContent/>
                    <SidebarHelp/>
                    {location.pathname === '/' &&
                    <SidebarSettings/>
                    }
                </FLexWrapper>
            </ThemeProvider>
        );
    }
}

export default withRouter(App);
