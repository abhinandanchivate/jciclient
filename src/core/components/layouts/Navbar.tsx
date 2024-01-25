import React from "react";
import { NavLink } from "react-router-dom";

//
type Props = {
  appName: string;
};

const Navbar = ({ appName }: Props) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code"></i> {appName}
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <NavLink to={"/auth/register"}>Register</NavLink>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
