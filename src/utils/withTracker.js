/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import config from "config";
import PropTypes from "prop-types";
import React, { Component } from "react";
import * as GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize(config.google.trackingId, {
  testMode: process.env.NODE_ENV === "test"
});

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  class HOC extends Component {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string
      }).isRequired
    };

    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = prevProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
};

export default withTracker;
