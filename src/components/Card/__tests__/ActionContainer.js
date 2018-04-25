import React from "react";
import renderWithTheme from "testHelpers";
import ActionContainer from "components/Card/ActionContainer";

describe("Card Action Container", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<ActionContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
