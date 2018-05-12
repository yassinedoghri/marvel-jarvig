import { Card } from "components";
import PropTypes from "prop-types";
import React, { Component } from "react";

import FaHome from "react-icons/lib/fa/home";

class ErrorCard extends Component {
  render() {
    const { error } = this.props;

    return (
      <Card alignCenter>
        <Card.Ribbon backgroundcolor="primary">error!</Card.Ribbon>
        <Card.Title>
          {`Oops, looks like something went wrong with the Marvel API...`}
        </Card.Title>
        <Card.BodyContainer>
          <Card.BodyParagraph center>
            Message: {error.message}
          </Card.BodyParagraph>
          <Card.BodyParagraph center>Try again later!</Card.BodyParagraph>
        </Card.BodyContainer>
        <Card.ActionContainer>
          <Card.ActionLink
            to="/"
            backgroundcolor="accent2"
            color="contrastLight"
          >
            <FaHome /> Home
          </Card.ActionLink>
        </Card.ActionContainer>
      </Card>
    );
  }
}

ErrorCard.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  }).isRequired
};

export default ErrorCard;
