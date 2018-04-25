import React from "react";
import renderWithTheme from "testHelpers";
import Settings from "components/Settings";

describe("Settings Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Settings>
        <Settings.Text>
          Tweak your parameters to better suit your level!
        </Settings.Text>
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
