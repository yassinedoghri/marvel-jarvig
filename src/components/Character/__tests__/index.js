import Character from "components/Character";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

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

  it("adds result modifier", () => {
    const tree = renderWithTheme(
      <Character key={1} result="none">
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

  it("adds incorrect result modifier", () => {
    const tree = renderWithTheme(
      <Character key={1} result="incorrect">
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

  it("adds correct result modifier", () => {
    const tree = renderWithTheme(
      <Character key={1} result="correct">
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
