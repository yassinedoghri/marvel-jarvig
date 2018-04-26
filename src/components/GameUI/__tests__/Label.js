import React from "react";
import { renderWithTheme } from "testHelpers";
import Item from "components/GameUI/Item";

describe("GameUI Icon", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item>Icon</Item>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds blink modifier", () => {
    const tree = renderWithTheme(<Item blink>Icon</Item>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
