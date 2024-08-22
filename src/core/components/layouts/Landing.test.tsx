import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./Landing";

import { BrowserRouter as Router } from "react-router-dom";

test("renders landing page with sign up and login buttons", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );

  const signUpButton = screen.getByText(/sign up/i);
  const loginButton = screen.getByText(/login/i);

  expect(signUpButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
