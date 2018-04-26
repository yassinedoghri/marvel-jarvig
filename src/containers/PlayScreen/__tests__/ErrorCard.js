import React from "react";
import { renderInContext } from "testHelpers";
import ErrorCard from "containers/PlayScreen/ErrorCard";

describe("ErrorCard container", () => {
  it("renders without crashing", () => {
    renderInContext(<ErrorCard error={{ message: "error!" }} />);
  });
});
