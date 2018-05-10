import ErrorCard from "containers/PlayScreen/ErrorCard";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("ErrorCard container", () => {
  it("renders without crashing", () => {
    renderInContext(<ErrorCard error={{ message: "error!" }} />);
  });
});
