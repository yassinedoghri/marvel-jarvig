import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleSidebar } from "actions/UIActions";
import { setDifficulty, updateSettings } from "actions/GameActions";

import { Settings, Sidebar } from "components";

import TiTimesOutline from "react-icons/lib/ti/times-outline";

import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";

import Select from "react-select";
import "react-select/dist/react-select.css";
import PropTypes from "prop-types";

class SidebarSettings extends Component {
  render() {
    const {
      isSettingsOpen,
      toggleSidebar,
      jarvigSettings,
      jarvigDifficulty,
      updateSettings,
      setDifficulty,
      difficulties
    } = this.props;

    return (
      <Sidebar open={isSettingsOpen}>
        <Sidebar.Title>Game Parameters</Sidebar.Title>
        <Sidebar.CloseButton onClick={() => toggleSidebar("settings")}>
          <TiTimesOutline />
        </Sidebar.CloseButton>
        <Sidebar.Content>
          <Settings>
            <Settings.Text>
              Tweak your parameters to better suit your level!
            </Settings.Text>
            <Select
              name="degree-difficulty"
              defaultValue={jarvigDifficulty}
              value={jarvigDifficulty}
              onChange={e => setDifficulty(e)}
              options={difficulties}
              placeholder="Custom..."
            />
            <Settings.Item>
              <Settings.Item.Label>Game time (min)</Settings.Item.Label>
              <Settings.Item.Counter>
                {jarvigSettings.time}
              </Settings.Item.Counter>
              <Slider
                value={jarvigSettings.time}
                min={1}
                max={10}
                onChange={value => updateSettings("time", value)}
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Item.Label>Number of Lives</Settings.Item.Label>
              <Settings.Item.Counter>
                {jarvigSettings.numberOfLives}
              </Settings.Item.Counter>
              <Slider
                value={jarvigSettings.numberOfLives}
                min={1}
                max={10}
                onChange={value => updateSettings("numberOfLives", value)}
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Item.Label>Number of Questions</Settings.Item.Label>
              <Settings.Item.Counter>
                {jarvigSettings.numberOfQuestions}
              </Settings.Item.Counter>
              <Slider
                value={jarvigSettings.numberOfQuestions}
                min={1}
                max={30}
                onChange={value => updateSettings("numberOfQuestions", value)}
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Item.Label>Characters per question</Settings.Item.Label>
              <Settings.Item.Counter>
                {jarvigSettings.charactersPerQuestion}
              </Settings.Item.Counter>
              <Slider
                value={jarvigSettings.charactersPerQuestion}
                min={2}
                max={12}
                onChange={value =>
                  updateSettings("charactersPerQuestion", value)
                }
              />
            </Settings.Item>
            <Settings.Item>
              <Settings.Item.Checkbox>
                <input
                  type="checkbox"
                  name="hints"
                  checked={jarvigSettings.hints}
                  onChange={event =>
                    updateSettings("hints", event.target.checked)
                  }
                />Hints (if available)
              </Settings.Item.Checkbox>
            </Settings.Item>
          </Settings>
        </Sidebar.Content>
      </Sidebar>
    );
  }
}

SidebarSettings.propTypes = {
  isSettingsOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  jarvigSettings: PropTypes.shape({
    time: PropTypes.number,
    numberOfLives: PropTypes.number,
    numberOfQuestions: PropTypes.number,
    charactersPerQuestion: PropTypes.number,
    hint: PropTypes.bool
  }).isRequired,
  jarvigDifficulty: PropTypes.string.isRequired,
  updateSettings: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  difficulties: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  isSettingsOpen: state.ui.sidebars.settings,
  jarvigSettings: state.jarvig.settings,
  jarvigDifficulty: state.jarvig.difficulty,
  difficulties: state.jarvig.difficulties
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar,
      updateSettings,
      setDifficulty
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarSettings);
