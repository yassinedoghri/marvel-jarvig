import CheckBadge from "components/Character/CheckBadge";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Character CheckBadge", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<CheckBadge>Ok</CheckBadge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds the correct answer modifier", () => {
    const tree = renderWithTheme(
      <CheckBadge answer="correct">Ok</CheckBadge>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds the incorrect answer modifier", () => {
    const tree = renderWithTheme(
      <CheckBadge answer="incorrect">Ok</CheckBadge>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
