import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      {" "}
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
              <Link to={"/auth/register"}> Sign Up</Link>

              <a href="login.html" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
