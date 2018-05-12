import { PlayMode } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("PlayMode", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<PlayMode />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
