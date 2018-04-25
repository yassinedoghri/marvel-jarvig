import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import PropTypes from "prop-types";

import { FlexWrapper } from "components";

import HeaderContent from "containers/HeaderContent";
import FooterContent from "containers/FooterContent";
import MainContent from "containers/MainContent";
import SidebarHelp from "containers/SidebarHelp";
import SidebarSettings from "containers/SidebarSettings";

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <FlexWrapper>
          <HeaderContent />
          <MainContent />
          <FooterContent />
          <SidebarHelp />
          {location.pathname === "/" && <SidebarSettings />}
        </FlexWrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default withRouter(App);
