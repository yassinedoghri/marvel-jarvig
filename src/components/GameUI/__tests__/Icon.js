import Icon from "components/GameUI/Icon";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("GameUI Icon", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Icon>Icon</Icon>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds animated modifier", () => {
    const tree = renderWithTheme(<Icon animated>Icon</Icon>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
