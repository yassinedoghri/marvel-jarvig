import RadioBtn from "components/Character/RadioBtn";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Character RadioBtn", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<RadioBtn />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds selectedRight result modifier", () => {
    const tree = renderWithTheme(<RadioBtn result="selectedRight" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds selectedWrong result modifier", () => {
    const tree = renderWithTheme(<RadioBtn result="selectedWrong" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds answerRight result modifier", () => {
    const tree = renderWithTheme(<RadioBtn result="answerRight" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
