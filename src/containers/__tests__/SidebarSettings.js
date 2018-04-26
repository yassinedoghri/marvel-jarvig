import React from "react";
import { renderInContext } from "testHelpers";
import SidebarSettings from "containers/SidebarSettings";

describe("SidebarSettings container", () => {
  it("renders without crashing", () => {
    renderInContext(<SidebarSettings />);
  });
});
