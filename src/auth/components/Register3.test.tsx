import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to use jest-dom matchers
import { act } from "react-dom/test-utils";

import { AppState, useAppDispatch } from "../../redux/store";
import Register3 from "./Register3";
// Replace this import statement in your test file

// Add this at the top of your test file
jest.mock("axios");

// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// Mock the Redux store and useDispatch hook
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Register3 Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the component without errors", () => {
    render(<Register3 />);
    // Add assertions for the rendered output if needed
  });

  test("submits the form with valid data", async () => {
    const mockDispatch = jest.fn();
    const mockUseSelector = jest.fn().mockReturnValue({}); // Add mock state if needed

    // Mock useDispatch and useSelector
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useDispatch: () => mockDispatch,
      useSelector: mockUseSelector,
    }));

    render(<Register3 />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByPlaceholderText(/email address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText(/confirm password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/register/i));

    // Wait for the asynchronous action (if any)
    await waitFor(() => {});

    // Add assertions for the dispatched action and any expected behavior
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    // Add more assertions as needed
  });

  // Add more test cases as needed
});
