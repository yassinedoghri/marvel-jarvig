import React from "react";
import renderWithTheme from "testHelpers";
import Text from "components/Settings/Text";

describe("Settings Item Text", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Text>Hello World!</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
