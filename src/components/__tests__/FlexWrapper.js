import React from "react";
import { renderWithTheme } from "testHelpers";
import { FlexWrapper } from "components";

describe("FlexWrapper", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
