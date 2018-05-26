import PropTypes from "prop-types";
import React, { Component } from "react";

class Countdown extends Component {
  static secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    return {
      h: hours,
      m: minutes,
      s: seconds
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      time: Countdown.secondsToTime(props.from),
      seconds: props.from
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { isPaused, onCountdownPaused } = this.props;
    if (isPaused) {
      onCountdownPaused(this.state.time);
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = 0;
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    const { isPaused, onCountdownEnd } = this.props;

    if (!isPaused) {
      const seconds = this.state.seconds - 1;
      this.setState({
        time: Countdown.secondsToTime(seconds),
        seconds
      });

      // Check if we're at zero.
      if (seconds === 0) {
        this.stopTimer();
        onCountdownEnd(this.state.time);
      }
    }
  }

  render() {
    const { time } = this.state;
    const timer =
      time.m === 0
        ? time.s
        : `${time.m}:${time.s < 10 ? `0${time.s}` : time.s}`;

    return <React.Fragment>{timer}</React.Fragment>;
  }
}

Countdown.propTypes = {
  from: PropTypes.number.isRequired,
  isPaused: PropTypes.bool,
  onCountdownPaused: PropTypes.func,
  onCountdownEnd: PropTypes.func
};

Countdown.defaultProps = {
  isPaused: false,
  onCountdownPaused: () => {},
  onCountdownEnd: () => {}
};

export default Countdown;
