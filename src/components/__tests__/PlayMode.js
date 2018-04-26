import React from "react";
import { renderWithTheme } from "testHelpers";
import { PlayMode } from "components";

describe("PlayMode", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<PlayMode />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
