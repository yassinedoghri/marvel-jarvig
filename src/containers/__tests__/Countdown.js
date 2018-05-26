import Countdown from "containers/Countdown";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("Countdown container", () => {
  it("renders without crashing", () => {
    const tree = renderInContext(
      <Countdown
        from={2 * 60}
        isPaused={false}
        onCountdownPaused={jest.fn()}
        onCountdownEnd={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
