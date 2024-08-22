import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import Register3 from "./Register3";
// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// Mock the Redux useDispatch and useSelector hooks
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the axios library
jest.mock("axios");

test("submits the form with valid data", async () => {
  // Mock the axios post method to simulate a successful registration
  axios.post.mockResolvedValue({ data: {} });

  render(<Register3 />);

  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email Address"), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password123" },
  });
  fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
    target: { value: "password123" },
  });
  fireEvent.submit(screen.getByRole("button", { name: /register/i }));

  // Add assertions for the expected behavior after form submission
  await waitFor(() => {
    // Assuming a navigation occurs after successful registration
    expect(screen.getByText("Redirecting to dashboard...")).toBeInTheDocument();
  });

  // Check if the axios.post method was called with the correct parameters
  expect(axios.post).toHaveBeenCalledWith("/api/register", {
    name: "John",
    email: "john@example.com",
    password: "password123",
  });
});

// Add more test cases as needed based on your component's behavior
