import HintMessage from "components/Card/HintMessage";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Hint Message", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<HintMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
