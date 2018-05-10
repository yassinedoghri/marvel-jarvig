import Countdown from "containers/Countdown";
import React from "react";
import { renderInContext } from "utils/testHelpers";

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
