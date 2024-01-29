import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { AuthState } from "../redux/types/AuthState";
import { SignupParams } from "../redux/types/auth.param";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { IRegister } from "../models/IRegister";
import { IErrorRegister } from "../models/IErrorRegister";
import { useNavigate } from "react-router-dom";

import registerAction from "../redux/actions/RegisterAction";
import classNames from "classnames";
import { AppState, useAppDispatch } from "../../redux/hooks";
interface SignupProps {
  auth: AuthState;
  registerAction: (signupParams: SignupParams) => void;
  // immediately import actions after declarations
}

type Props = {};

const Register3 = (props: Props) => {
  const dispatch = useAppDispatch();
  const auth = useSelector((state: AppState) => state.authReducer);
  const [formData, setFormData] = useState<IRegister>({
    name: "abhi",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState<IErrorRegister>({});

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(registerAction({ name, email, password }));
    navigate("/dashboard");
  };
  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={onChange}
              className={classNames("form-control", {
                "is-invalid": error.name,
              })}
            />
          </div>
          <div>{error.name}</div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              className={classNames("form-control", {
                "is-invalid": error.email,
              })}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
            <div className="d-block invalid-feedback">{error.email}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register3;
