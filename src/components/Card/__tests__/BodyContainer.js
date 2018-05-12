import BodyContainer from "components/Card/BodyContainer";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Body Container", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<BodyContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
