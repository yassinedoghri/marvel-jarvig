import Image from "components/Character/Image";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Character Image", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
