import React, { Component } from "react";
import { Main } from "components";
import { Route, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import HomeScreen from "containers/HomeScreen";
import PlayScreen from "containers/PlayScreen";
import ResultScreen from "containers/ResultScreen";

class MainContent extends Component {
  render() {
    const { location } = this.props;
    return (
      <Main isHome={location.pathname === "/"}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/play" component={PlayScreen} />
          <Route path="/result" component={ResultScreen} />
        </Switch>
      </Main>
    );
  }
}

MainContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default withRouter(MainContent);
