import ResultScreen from "containers/ResultScreen";
import { createMemoryHistory } from "history";
import React from "react";
import { ShallowRenderInContext } from "utils/testHelpers";

describe("ResultScreen container", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory("/");
    ShallowRenderInContext(<ResultScreen history={history} />);
  });
});
