import { GameUI } from "components";
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
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    const { result, isGamePaused } = this.props;
    if (
      (result.length === 0 && this.timer === 0) ||
      (result.length === 0 && isGamePaused)
    ) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = 0;
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    const { isGamePaused, onCountdownEnd } = this.props;

    if (!isGamePaused) {
      const seconds = this.state.seconds - 1;
      this.setState({
        time: Countdown.secondsToTime(seconds),
        seconds
      });

      // Check if we're at zero.
      if (seconds === 0) {
        clearInterval(this.timer);
        onCountdownEnd();
      }
    }
  }

  render() {
    const { time } = this.state;
    const { isGamePaused } = this.props;
    const timer =
      time.m === 0
        ? time.s
        : `${time.m}:${time.s < 10 ? `0${time.s}` : time.s}`;

    return <GameUI.Label blink={isGamePaused}>{timer}</GameUI.Label>;
  }
}

Countdown.propTypes = {
  from: PropTypes.number.isRequired,
  isGamePaused: PropTypes.bool,
  result: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCountdownEnd: PropTypes.func.isRequired
};

Countdown.defaultProps = {
  isGamePaused: false
};

export default Countdown;
