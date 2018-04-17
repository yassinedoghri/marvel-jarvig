import React, {Component} from 'react';
import {GameUI} from '../components';


class Countdown extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 0};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        return {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
    }

    componentDidMount() {
        this.setState({ seconds: this.props.from });
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
    }

    componentWillUnmount () {
        this.timer && clearInterval(this.timer);
        this.timer = 0;
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        const {time} = this.state;
        const timer = time.m === 0 ? time.s : time.m + ':' + (time.s < 10 ? '0' + time.s : time.s);

        return(
            <GameUI.Item.Label>{timer}</GameUI.Item.Label>
        );
    }
}

export default Countdown;
