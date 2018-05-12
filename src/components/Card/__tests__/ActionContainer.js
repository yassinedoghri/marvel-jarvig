import ActionContainer from "components/Card/ActionContainer";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Action Container", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<ActionContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
