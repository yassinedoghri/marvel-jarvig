import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleSidebar } from "actions/UIActions";

import { Sidebar, Paragraph, HR } from "components";
import TiTimesOutline from "react-icons/lib/ti/times-outline";
import PropTypes from "prop-types";

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
          <Paragraph light>
            {`J.A.R.V.I.G. (Just A Rather Very Interesting Game) lets you find and
            discover Marvel Comics characters based on their name, image and
            description!`}
          </Paragraph>
          <Paragraph light>
            {`You'll have to find characters based on their name and image.`}
          </Paragraph>
          <Paragraph light>
            {`It's a game! So, you can tweak some settings before playing, have fun!`}
          </Paragraph>
          <HR />
          <Paragraph light sm>
            {`Developed by me (Yassine Doghri) during ekino's onboarding. v0.1`}
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
