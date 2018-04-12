import React, {Component} from 'react';
import {Footer, Copyright, Toolbar} from '../components';

import FaVolume from 'react-icons/lib/fa/volume-off';
import FaCog from 'react-icons/lib/fa/cog';
import FaInfo from 'react-icons/lib/fa/info-circle';

class FooterContent extends Component {
    render() {
        return (
            <Footer>
                <Toolbar>
                    <Toolbar.Item md><FaVolume/></Toolbar.Item>
                    <Toolbar.Item md><FaCog/></Toolbar.Item>
                    <Toolbar.Item md><FaInfo/></Toolbar.Item>
                </Toolbar>
                <Copyright>Created by Yassine Doghri © 2018 ekino.</Copyright>
            </Footer>
        );
    }
}

export default FooterContent;
