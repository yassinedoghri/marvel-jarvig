import React from "react";
import { renderInContext } from "testHelpers";
import PlayScreen from "containers/PlayScreen";
import { createMemoryHistory } from "history";

describe("PlayScreen container", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory("/");
    renderInContext(<PlayScreen history={history} />);
  });
});
