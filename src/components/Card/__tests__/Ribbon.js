import React from "react";
import { renderWithTheme } from "testHelpers";
import Ribbon from "components/Card/Ribbon";

describe("Card Ribbon", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Ribbon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
