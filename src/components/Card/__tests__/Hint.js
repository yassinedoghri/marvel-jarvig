import Hint from "components/Card/Hint";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Hint", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Hint />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
