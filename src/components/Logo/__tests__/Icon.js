import Icon from "components/Logo/Icon";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Logo Icon", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Icon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
