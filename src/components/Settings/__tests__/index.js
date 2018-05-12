import Settings from "components/Settings";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Settings Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Settings>
        <Settings.Item>
          <Settings.Label>Game time (min)</Settings.Label>
          <Settings.Counter />
        </Settings.Item>
        <Settings.Item>
          <Settings.Checkbox>
            <input type="checkbox" />Checkbox
          </Settings.Checkbox>
        </Settings.Item>
      </Settings>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
