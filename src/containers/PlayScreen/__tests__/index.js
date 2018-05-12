import PlayScreen from "containers/PlayScreen";
import { createMemoryHistory } from "history";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("PlayScreen container", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory("/");
    renderInContext(<PlayScreen history={history} />);
  });
});
