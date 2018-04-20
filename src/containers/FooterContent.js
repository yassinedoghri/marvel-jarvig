import React, {Component} from 'react';
import {bindActionCreators, compose} from 'redux'
import {connect} from 'react-redux'
import {toggleSidebar} from "../actions/UIActions";

import {Footer, Copyright, Toolbar} from '../components';
import {withRouter} from 'react-router-dom';

import FaCog from 'react-icons/lib/fa/cog';
import FaHelp from 'react-icons/lib/fa/question-circle';

class FooterContent extends Component {
    render() {
        const {toggleSidebar, location} = this.props;

        return (
            <Footer>
                <Toolbar>
                    {/*<Toolbar.Item md><FaVolume/></Toolbar.Item>*/}
                    {location.pathname === '/' &&
                    <Toolbar.Item md
                                  onClick={() => toggleSidebar('settings')}
                    ><FaCog/></Toolbar.Item>
                    }
                    <Toolbar.Item md
                                  onClick={() => toggleSidebar('help')}
                    ><FaHelp/></Toolbar.Item>
                </Toolbar>
                <Copyright>Created by <a href="https://yassine.doghri.fr/" target="_blank" rel="noopener noreferrer">Yassine Doghri</a> © 2018 <a href="https://www.ekino.com/" target="_blank" rel="noopener noreferrer"> ekino.</a></Copyright>
            </Footer>
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        toggleSidebar: toggleSidebar,
    }, dispatch)
);

export default compose(
    withRouter,
    connect(
        null,
        mapDispatchToProps
    ),
)(FooterContent);
