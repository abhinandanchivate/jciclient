// Navbar.test.js (or Navbar.test.tsx for TypeScript)
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders Navbar with correct app name", () => {
    const appName = "Test App";
    render(
      <Router>
        <Navbar appName={appName} />
      </Router>
    );

    // Check if the app name is rendered correctly
    const appTitle = screen.getByText(`${appName}`);
    expect(appTitle).toBeInTheDocument();

    // Check if the "Register" NavLink is present
    const registerLink = screen.getByRole("link", { name: /register/i });
    expect(registerLink).toBeInTheDocument();

    // Check if the "Login" link is present
    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });
});
