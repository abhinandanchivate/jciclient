import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function DashboardAction({}: Props) {
  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome John Doe
        </p>
        <div className="dash-buttons">
          <Link to="/profile/65ba02b9be93f50dccb7de2d">
            <i className="fas fa-user-circle text-primary"></i> Edit Profile
          </Link>
          <a href="add-experience.html" className="btn btn-light">
            <i className="fab fa-black-tie text-primary"></i> Add Experience
          </a>
          <a href="add-education.html" className="btn btn-light">
            <i className="fas fa-graduation-cap text-primary"></i> Add Education
          </a>
        </div>
      </section>
    </>
  );
}

export default DashboardAction;
