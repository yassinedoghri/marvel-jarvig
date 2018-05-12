import Ribbon from "components/Card/Ribbon";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Ribbon", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Ribbon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
