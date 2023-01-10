import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Rofl } from "./example";

test("loads and displays greeting", async () => {
  render(<Rofl count={3} />);

  expect(screen.getByRole("heading")).toHaveTextContent("ROFL!ROFL!ROFL!");
});
