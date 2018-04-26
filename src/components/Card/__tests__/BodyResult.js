import React from "react";
import { renderWithTheme } from "testHelpers";
import BodyResult from "components/Card/BodyResult";

describe("Card Body Result", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<BodyResult />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
