import React from "react";
import { ShallowRenderInContext } from "testHelpers";
import ResultScreen from "containers/ResultScreen";
import { createMemoryHistory } from "history";

describe("ResultScreen container", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory("/");
    ShallowRenderInContext(<ResultScreen history={history} />);
  });
});
