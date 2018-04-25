import React from "react";
import renderWithTheme from "testHelpers";
import Checkbox from "components/Settings/Checkbox";

describe("Settings Checkbox", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Checkbox>
        <input type="checkbox" />
      </Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
