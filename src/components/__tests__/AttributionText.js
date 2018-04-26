import React from "react";
import { renderWithTheme } from "testHelpers";
import { AttributionText } from "components";

describe("AttributionText", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<AttributionText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
