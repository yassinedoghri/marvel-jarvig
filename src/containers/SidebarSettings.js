import React, {Component} from 'react';
import {Sidebar, Settings} from '../components';

import TiTimesOutline from 'react-icons/lib/ti/times-outline';

import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


class SidebarSettings extends Component {
    render() {
        return (
            <Sidebar hidden>
                <Sidebar.Title>Game Parameters</Sidebar.Title>
                <Sidebar.CloseButton><TiTimesOutline /></Sidebar.CloseButton>
                <Sidebar.Content>
                    <Settings>
                        <Settings.Text>Tweak your parameters to better suit your level!</Settings.Text>
                        <Select
                            name="degree-difficulty"
                            value="medium"
                            onChange={e => (console.log(e))}
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
        );
    }
}

export default SidebarSettings;
