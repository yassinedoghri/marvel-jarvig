import React from "react";
import renderWithTheme from "testHelpers";
import Image from "components/Character/Image";

describe("Character Image", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
