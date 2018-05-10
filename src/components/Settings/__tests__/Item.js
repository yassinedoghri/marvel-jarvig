import Item from "components/Settings/Item";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Settings Item", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
