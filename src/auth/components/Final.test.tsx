import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Register3 from "./Register3";
import { useDispatch, useSelector } from "react-redux";

// Mock the useDispatch and useSelector hooks
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the registerAction function
jest.mock("../redux/actions/RegisterAction", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Register3 Component", () => {
  beforeEach(() => {
    // Mock the useSelector hook to return the desired state
    useSelector.mockReturnValue(/* mock state here if needed */);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <Register3 />
      </Router>
    );

    // Assert that important elements are rendered
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Email Address")).toBeInTheDocument();
    // Add more assertions as needed
  });

  it("submits the form correctly", async () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <Register3 />
      </Router>
    );

    // Mock the useDispatch hook to spy on the dispatched action
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Mock the registerAction function
    const mockRegisterAction = jest.fn();
    jest.mock("../redux/actions/RegisterAction", () => ({
      __esModule: true,
      default: mockRegisterAction,
    }));

    // Fill out the form
    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(getByPlaceholderText("Email Address"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(getByPlaceholderText("Confirm Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.submit(getByText("Register"));

    // Wait for the asynchronous action to be called
    await waitFor(() => {
      // Assert that the action was dispatched with the correct parameters
      expect(mockDispatch).toHaveBeenCalledWith(
        mockRegisterAction({
          name: "John",
          email: "john@example.com",
          password: "password123",
        })
      );
    });

    // Add more assertions if needed
  });
});
