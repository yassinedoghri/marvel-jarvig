import { Main } from "components";
import Routes from "constants/routes";

import HomeScreen from "containers/HomeScreen";
import PlayScreen from "containers/PlayScreen";
import ResultScreen from "containers/ResultScreen";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import withTracker from "utils/withTracker";

class MainContent extends Component {
  render() {
    const { location } = this.props;
    return (
      <Main isHome={location.pathname === Routes.Home}>
        <Switch>
          <Route exact path={Routes.Home} component={withTracker(HomeScreen)} />
          <Route exact path={Routes.Play} component={withTracker(PlayScreen)} />
          <Route
            exact
            path={Routes.Results}
            component={withTracker(ResultScreen)}
          />
          {/* 404: redirects to homepage */}
          <Redirect to={Routes.Home} />
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
