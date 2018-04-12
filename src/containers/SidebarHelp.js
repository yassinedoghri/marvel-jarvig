import React, {Component} from 'react';
import {Sidebar, Paragraph, HR} from '../components';

import TiTimesOutline from 'react-icons/lib/ti/times-outline';

class SidebarHelp extends Component {
    render() {
        return (
            <Sidebar hidden>
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
        );
    }
}

export default SidebarHelp;
