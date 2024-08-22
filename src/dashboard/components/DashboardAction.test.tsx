import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DashboardAction from "./DashboardAction";
import { BrowserRouter as Router } from "react-router-dom";

describe("DashboardAction Component", () => {
  it("renders the component correctly", () => {
    render(<DashboardAction />);

    // Check if the main heading is present
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    // Check if the welcome message is present
    expect(screen.getByText("Welcome John Doe")).toBeInTheDocument();
    // Check if Edit Profile link is present
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
    // Check if Add Experience button is present
    expect(screen.getByText("Add Experience")).toBeInTheDocument();
    // Check if Add Education button is present
    expect(screen.getByText("Add Education")).toBeInTheDocument();
  });

  it("navigates to the profile page when 'Edit Profile' is clicked", () => {
    render(
      <Router>
        <DashboardAction />
      </Router>
    );

    fireEvent.click(screen.getByText("Edit Profile"));
    // Add assertions for navigation or other behavior
  });

  // Add more test cases for other user interactions if needed
});
