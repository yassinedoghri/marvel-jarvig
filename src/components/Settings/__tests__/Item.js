import React from "react";
import { renderWithTheme } from "testHelpers";
import Item from "components/Settings/Item";

describe("Settings Item", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
