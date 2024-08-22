import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import getCurrentUserProfileAction from "../../profile/redux/actions/profileAction";

const mockStore = configureStore([thunk]);

jest.mock("../../profile/redux/actions/profileAction");

describe("Dashboard Component", () => {
  test("renders create profile button when profile is null", async () => {
    // Mock the getCurrentUserProfileAction to return null profile
    (getCurrentUserProfileAction as jest.Mock).mockReturnValue(() => ({
      type: "GET_CURRENT_USER_PROFILE",
      payload: null,
    }));

    const store = mockStore({
      authReducer: { userDetails: {} },
      profileReducer: { currentProfile: null },
    });

    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    // Add assertions for the expected behavior
    expect(screen.getByText("Create My Profile")).toBeInTheDocument();
  });

  test("renders profile details when profile is not null", async () => {
    // Mock the getCurrentUserProfileAction to return a dummy profile
    (getCurrentUserProfileAction as jest.Mock).mockReturnValue(() => ({
      type: "GET_CURRENT_USER_PROFILE",
      payload: {
        /* dummy profile data */
      },
    }));

    const store = mockStore({
      authReducer: { userDetails: {} },
      profileReducer: {
        currentProfile: {
          /* dummy profile data */
        },
      },
    });

    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    // Wait for asynchronous action to complete
    await waitFor(() => {});

    // Add assertions for the expected behavior
    expect(screen.getByText("Welcome John Doe")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
