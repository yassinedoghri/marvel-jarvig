import { FlexWrapper } from "components";
import Routes from "constants/routes";
import FooterContent from "containers/FooterContent";

import HeaderContent from "containers/HeaderContent";
import MainContent from "containers/MainContent";
import SidebarHelp from "containers/SidebarHelp";
import SidebarSettings from "containers/SidebarSettings";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme";

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <FlexWrapper>
          <HeaderContent />
          <MainContent />
          <SidebarHelp />
          {location.pathname === Routes.Home && <SidebarSettings />}
          <FooterContent />
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
