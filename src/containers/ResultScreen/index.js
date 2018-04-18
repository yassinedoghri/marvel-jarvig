import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {FlexSection, Card} from "../../components";
import CountUp from 'react-countup';
import FaRepeat from 'react-icons/lib/fa/repeat';
import FaHome from 'react-icons/lib/fa/home';

import {push} from "react-router-redux";
import {getArrayCounts} from "../../helpers";

class ResultScreen extends Component {
    constructor(props) {
        super(props);

        const {redirect, history} = this.props;

        if (history.action === 'POP') {
            redirect('/');
        }
    }

    render() {
        const {jarvigSettings, game} = this.props;
        const {numberOfQuestions} = jarvigSettings;

        const resultCounts = getArrayCounts(game.result);
        console.log(resultCounts);

        const rightAnswers = resultCounts[1] ? resultCounts[1] : 0;
        const wrongAnswers = resultCounts[0] ? resultCounts[0] : 0;
        const unanswered = (numberOfQuestions - (rightAnswers + wrongAnswers));
        console.log(typeof unanswered);
        console.log(rightAnswers, wrongAnswers, unanswered, numberOfQuestions);

        const resultPercentage = (rightAnswers / numberOfQuestions) * 100;

        console.log(resultPercentage);

        let cardMessage = '';
        if (resultPercentage < 20) {
            cardMessage = 'It\'s quite awful, you need more practice!';
        } else if (resultPercentage < 50) {
            cardMessage = 'A bit more practice and you\'ll get there!';
        } else if (resultPercentage < 70) {
            cardMessage = 'Well done, you\'re getting there!';
        } else if (resultPercentage < 90) {
            cardMessage = 'Well, that\'s quite impressive!';
        } else if (resultPercentage < 99) {
            cardMessage = 'Wow, you can consider yourself a Master!';
        } else {
            cardMessage = 'Perfect! That\'s just amazing!'
        }

        return (
            <FlexSection spaceTop spaceRight spaceLeft>
                <Card alignCenter>
                    <Card.Ribbon>Game Over!</Card.Ribbon>
                    <Card.Title>{cardMessage}</Card.Title>
                    <Card.BodyContainer>
                        <Card.BodyResult>
                            <CountUp start={0} end={resultPercentage} />%
                        </Card.BodyResult>
                    </Card.BodyContainer>
                    <Card.ActionContainer>
                        <Card.ActionLink to="/play" half accent dark><FaRepeat/> Restart</Card.ActionLink>
                        <Card.ActionLink to="/" half accent2 dark><FaHome/> Home</Card.ActionLink>
                    </Card.ActionContainer>
                </Card>
            </FlexSection>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jarvigSettings: state.jarvig.settings,
        game: state.jarvig.game,
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        redirect: push,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
