import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { toggleSidebar } from "actions/UIActions";

import FaCog from "react-icons/lib/fa/cog";
import FaHelp from "react-icons/lib/fa/question-circle";

import { Copyright, Footer, Toolbar } from "../components/index";

class FooterContent extends Component {
  render() {
    const { location, toggleSidebar } = this.props;

    return (
      <Footer>
        <Toolbar>
          {location.pathname === "/" && (
            <Toolbar.Item md onClick={() => toggleSidebar("settings")}>
              <FaCog />
            </Toolbar.Item>
          )}
          <Toolbar.Item md onClick={() => toggleSidebar("help")}>
            <FaHelp />
          </Toolbar.Item>
        </Toolbar>
        <Copyright>
          {`Created by `}
          <a
            href="https://yassine.doghri.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Yassine Doghri`}
          </a>
          {` © 2018 `}
          <a
            href="https://www.ekino.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`ekino.`}
          </a>
        </Copyright>
      </Footer>
    );
  }
}

FooterContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default compose(withRouter, connect(null, mapDispatchToProps))(
  FooterContent
);
