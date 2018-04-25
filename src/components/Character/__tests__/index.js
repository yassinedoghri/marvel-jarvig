import React from "react";
import renderWithTheme from "testHelpers";
import Character from "components/Character";

describe("Character Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Character key={1}>
        <Character.RadioBtn id={1} />
        <label htmlFor={1}>
          <Character.Figure>
            <Character.CheckBadge />
            <Character.Image />
            <Character.Caption />
          </Character.Figure>
        </label>
      </Character>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
