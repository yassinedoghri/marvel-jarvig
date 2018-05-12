import Counter from "components/Settings/Counter";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Settings Counter", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Counter>10</Counter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
