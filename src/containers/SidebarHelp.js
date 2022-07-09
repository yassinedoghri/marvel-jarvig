import { toggleSidebar } from "actions/UIActions";

import { HR, Paragraph, Sidebar } from "components";
import PropTypes from "prop-types";
import React, { Component } from "react";
import TiTimesOutline from "react-icons/lib/ti/times-outline";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { description, repository, version } from "../../package.json";

class SidebarHelp extends Component {
  render() {
    const { isHelpOpen, toggleSidebar } = this.props;

    return (
      <Sidebar open={isHelpOpen}>
        <Sidebar.Title>What is it about?</Sidebar.Title>
        <Sidebar.CloseButton onClick={() => toggleSidebar("help")}>
          <TiTimesOutline />
        </Sidebar.CloseButton>
        <Sidebar.Content>
          <Paragraph color="contrastDark" lineHeight={1.5}>
            {description}
          </Paragraph>
          <HR color="contrastDark" tint="secondary" />
          <Paragraph size="sm" color="contrastDark" anchorColor="accent">
            {`Marvel JARVIG v${version} is an Open Source project, source code can be found in the `}
            <a href={repository.url} target="_blank" rel="noopener noreferrer">
              Github Repository
            </a>.
          </Paragraph>
        </Sidebar.Content>
      </Sidebar>
    );
  }
}

SidebarHelp.propTypes = {
  isHelpOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isHelpOpen: state.ui.sidebars.help
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHelp);
