import Checkbox from "components/Settings/Checkbox";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

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
