import BodyParagraph from "components/Card/BodyParagraph";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Body Paragraph", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<BodyParagraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
