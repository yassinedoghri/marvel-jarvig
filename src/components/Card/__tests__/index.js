import Card from "components/Card";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

// TODO: Fix ActionButton tests
describe("Card Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Card>
        <Card.Ribbon backgroundcolor="foreground">Ribbon!</Card.Ribbon>
        [<Card.Hint key={1}>X</Card.Hint>,
        <Card.HintMessage key={2}>This is a hint!</Card.HintMessage>]
        <Card.Title>Card Title</Card.Title>
        <Card.BodyContainer>
          <Card.BodyParagraph center>Card text</Card.BodyParagraph>
        </Card.BodyContainer>
        <Card.ActionContainer>
          {/* Card Action Buttons inside */}
        </Card.ActionContainer>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
