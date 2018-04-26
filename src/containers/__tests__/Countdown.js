import React from "react";
import { renderInContext } from "testHelpers";
import Countdown from "containers/Countdown";

describe("Countdown container", () => {
  it("renders without crashing", () => {
    renderInContext(
      <Countdown
        result={[]}
        from={2}
        onCountdownEnd={() => console.info("test")}
        isGamePaused={false}
      />
    );
  });
});
