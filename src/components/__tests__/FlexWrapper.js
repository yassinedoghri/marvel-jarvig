import { FlexWrapper } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("FlexWrapper", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
