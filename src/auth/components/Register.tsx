import React, { ChangeEvent, FormEvent, useState } from "react";
import classnames from "classnames";
import { IRegister } from "../models/IRegister";
import registerService from "../services/auth.service";
import { IErrorRegister } from "../models/IErrorRegister";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
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

    registerService(formData)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError({ ...err });
      });
  };

  // formData : we can't manipulate it directly ==> state spec are immutable
  // to maipulate them then we need to use setFormData method.
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
              className={classnames("form-control", {
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
              className={classnames("form-control", {
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

export default Register;
