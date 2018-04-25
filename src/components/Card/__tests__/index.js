import React from "react";
import renderWithTheme from "testHelpers";
import Card from "components/Card";

// TODO: Fix ActionButton tests
describe("Card Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Card>
        <Card.Ribbon background="primary">Ribbon!</Card.Ribbon>
        <div>
          <Card.Hint>X</Card.Hint>
          <Card.HintMessage>This is a hint!</Card.HintMessage>
        </div>
        <Card.Title>Card Title</Card.Title>
        <Card.BodyContainer>
          <Card.BodyParagraph center>Card text</Card.BodyParagraph>
        </Card.BodyContainer>
        <Card.ActionContainer>
          {/* <Card.ActionButton accent2="true" dark="true"> */}
          {/* Home */}
          {/* </Card.ActionButton> */}
        </Card.ActionContainer>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
