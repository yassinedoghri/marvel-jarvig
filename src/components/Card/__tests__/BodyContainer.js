import React from "react";
import renderWithTheme from "testHelpers";
import BodyContainer from "components/Card/BodyContainer";

describe("Card Body Container", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<BodyContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
