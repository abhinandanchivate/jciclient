import React, { useEffect } from "react";
import { AppState, useAppDispatch, useAppSelector } from "../../redux/hooks";
import getCurrentUserProfileAction from "../../profile/redux/actions/profileAction";
import DashboardAction from "./DashboardAction";
import ExpDetails from "./ExpDetails";
import EduDetails from "./EduDetails";

type Props = {};
//profile
// userDeatils
// isAuthenticated status.

const Dashboard = () => {
  const profileDetails = (
    <>
      {" "}
      <DashboardAction></DashboardAction>
      <ExpDetails></ExpDetails>
      <EduDetails></EduDetails>
      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </>
  );

  const createProfile = (
    <>
      {" "}
      <button className="btn btn-danger">
        <i className="fas fa-user-minus"></i>
        Create My Profile
      </button>
    </>
  );
  // dispathc
  const dispatch = useAppDispatch();
  // reducer
  // user , profile.
  // loading
  const { userDetails } = useAppSelector(
    (store: AppState) => store.authReducer
  );
  const { currentProfile } = useAppSelector(
    (store: AppState) => store.profileReducer
  );

  useEffect(() => {
    // Dispatch the action directly within the useEffect
    dispatch(getCurrentUserProfileAction());

    // Optionally, you can use the returned function for cleanup
    // This function will be called before the component unmounts
    return () => {
      // Cleanup logic if needed
    };
  }, [dispatch]); // Include any variables used inside the effect in the dependency array

  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome John Doe
        </p>
        {currentProfile == null ? createProfile : profileDetails}
      </section>
    </>
  );
};

export default Dashboard;
