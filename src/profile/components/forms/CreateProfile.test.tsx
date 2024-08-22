import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CreateProfile from "./CreateProfile"; // Import your profile actions
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import rootReducer from "../../../redux/reducers";
import getCurrentUserProfileAction from "../../redux/actions/profileAction";
import CreateProfileAction from "../../redux/actions/createProfileAction";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Mock the useDispatch and useSelector hooks
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the createUserProfile function
jest.mock("../../services/profile.service", () => ({
  createUserProfile: jest.fn(),
}));

const renderWithRedux = (
  component: React.ReactNode,
  initialState = {},
  store = createStore(rootReducer, initialState, applyMiddleware(thunk))
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("CreateProfile Component", () => {
  it("should render the form", () => {
    // Mock the useSelector hook to return the desired state
    (useSelector as jest.Mock).mockReturnValue({
      currentProfile: null,
    });

    const { getByLabelText, getByText } = renderWithRedux(<CreateProfile />);
    expect(
      screen.getByLabelText(/Select Professional Status/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Add Social Network Links/i)).toBeInTheDocument();
  });

  it("should handle form submission", async () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    // Mock the useSelector hook to return the desired state
    (useSelector as jest.Mock).mockReturnValue({
      currentProfile: null,
    });
    renderWithRedux(<CreateProfile />);
    fireEvent.change(screen.getByLabelText(/Select Professional Status/i), {
      target: { value: "Developer" },
    });
    // Add other form fields changes as needed

    // Mock the API response
    (getCurrentUserProfileAction as jest.Mock).mockResolvedValue({
      type: "GET_CURRENT_USER_PROFILE",
      payload: {
        social: {
          youtube: null,
          twitter: null,
          instagram: null,
          linkedin: null,
          facebook: null,
        },
        skills: ["a", "b", "c", "d", "g"],
        _id: "65ba02d9be93f50dccb7de3a",
        user: {
          _id: "65ba02b9be93f50dccb7de2d",
          name: "aarti",
          avatar:
            "https://gravatar.com/avatar/5679759ba21fda7957cd85e571bda796?d=mm&r=pg&s=200",
        },
        __v: 0,
        company: "abc",
        date: "2024-01-31T08:20:41.461Z",
        education: [],
        experience: [],
        githubusername: "abhinandanchivate2000121",
        location: "pune",
        status: "Developer",
        website: "https://abc.com",
      },
    });

    (CreateProfileAction as jest.Mock).mockResolvedValue({
      type: "UPDATE_PROFILE",
      payload: {
        social: {
          youtube: null,
          twitter: null,
          instagram: null,
          linkedin: null,
          facebook: null,
        },
        skills: ["a", "b", "c", "d", "g"],
        _id: "65ba02d9be93f50dccb7de3a",
        user: {
          _id: "65ba02b9be93f50dccb7de2d",
          name: "aarti",
          avatar:
            "https://gravatar.com/avatar/5679759ba21fda7957cd85e571bda796?d=mm&r=pg&s=200",
        },
        __v: 0,
        company: "abc",
        date: "2024-01-31T08:20:41.461Z",
        education: [],
        experience: [],
        githubusername: "abhinandanchivate2000121",
        location: "pune",
        status: "Developer",
        website: "https://abc.com",
      },
    });

    fireEvent.click(getByText(/Submit/i));

    // Wait for the asynchronous dispatch to complete
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(/* expected action */);
    });

    // Add expectations for success case, like navigation to "/dashboard"
  });
});
