import React from "react";
import { renderWithTheme } from "testHelpers";
import { PlayDiv } from "components";

describe("PlayDiv", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<PlayDiv />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
