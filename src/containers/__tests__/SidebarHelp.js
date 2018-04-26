import React from "react";
import { renderInContext } from "testHelpers";
import SidebarHelp from "containers/SidebarHelp";

describe("SidebarHelp container", () => {
  it("renders without crashing", () => {
    renderInContext(<SidebarHelp />);
  });
});
