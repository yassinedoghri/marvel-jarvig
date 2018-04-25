import React from "react";
import renderWithTheme from "testHelpers";
import BodyParagraph from "components/Card/BodyParagraph";

describe("Card Body Paragraph", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<BodyParagraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
