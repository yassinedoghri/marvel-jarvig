import Item from "components/GameUI/Item";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("GameUI Item", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
