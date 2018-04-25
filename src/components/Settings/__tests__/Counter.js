import React from "react";
import renderWithTheme from "testHelpers";
import Counter from "components/Settings/Counter";

describe("Settings Counter", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Counter>10</Counter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
