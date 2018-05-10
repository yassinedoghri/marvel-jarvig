import SidebarHelp from "containers/SidebarHelp";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("SidebarHelp container", () => {
  it("renders without crashing", () => {
    renderInContext(<SidebarHelp />);
  });
});
