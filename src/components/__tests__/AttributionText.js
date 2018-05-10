import { AttributionText } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("AttributionText", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<AttributionText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
