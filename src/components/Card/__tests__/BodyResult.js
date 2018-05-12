import BodyResult from "components/Card/BodyResult";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Body Result", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<BodyResult />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
