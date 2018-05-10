import SidebarSettings from "containers/SidebarSettings";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("SidebarSettings container", () => {
  it("renders without crashing", () => {
    renderInContext(<SidebarSettings />);
  });
});
