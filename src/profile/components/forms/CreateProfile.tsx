import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ProfileType } from "../../redux/types/ProfileType";

import { Navigate, useMatch, useNavigate } from "react-router-dom";
import { AppState, useAppDispatch, useAppSelector } from "../../../redux/hooks";
import CreateProfileAction from "../../redux/actions/createProfileAction";
import getCurrentUserProfileAction from "../../redux/actions/profileAction";

const CreateProfile = () => {
  const formType = useMatch("/profile/create");
  const { currentProfile } = useAppSelector(
    (store: AppState) => store.profileReducer
  );
  const renderFormType = formType ? "Create Your Profile" : "Edit Your Profile";
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserProfileAction());
  }, [dispatch]);
  useEffect(() => {
    if (currentProfile != null) setFormData(currentProfile);
  }, [currentProfile]);

  const [formData, setFormData] = useState<ProfileType>({
    ...currentProfile,
  } as ProfileType);

  const {
    user: { name, avatar } = {},
    social: { twitter, facebook, linkedIn, youtube } = {},
    bio,
    githubusername,
    company,
    website,
    location,
    status,
    skills,
    experience,
    education,
  } = formData;
  // Dynamically handle social fields
  const socialFields = Object.entries(formData.social || {}) as [
    string,
    string
  ][];

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Check if the field is a social field
    const isSocialField =
      formData.social !== undefined && name in formData.social;
    // Update state based on the field being changed
    setFormData((prevFormData) => {
      if (isSocialField) {
        return {
          ...prevFormData,
          social: {
            ...(prevFormData.social || {}), // Ensure social is not undefined
            [name]: value,
          },
        };
      }

      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    //registerAction({ name, email, password });
    // we have to compare the previous value with latest one.
    // then update it to formData.
    console.log(formData);
    dispatch(CreateProfileAction(formData, navigate));
  };
  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">{renderFormType}</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make
          your profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <select name="status" onChange={onChange} value={status}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              onChange={onChange}
              value={company}
            />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              onChange={onChange}
              value={website}
            />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={onChange}
              value={location}
            />
            <small className="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              onChange={onChange}
              value={skills}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              onChange={onChange}
              value={githubusername}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}></textarea>
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          <div className="my-2">
            <button type="button" className="btn btn-light">
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x"></i>
            <input
              type="text"
              placeholder="Twitter URL"
              name="twitter"
              onChange={onChange}
              value={twitter}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-facebook fa-2x"></i>
            <input
              type="text"
              placeholder="Facebook URL"
              name="facebook"
              onChange={onChange}
              value={facebook}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-youtube fa-2x"></i>
            <input
              type="text"
              placeholder="YouTube URL"
              name="youtube"
              onChange={onChange}
              value={youtube}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x"></i>
            <input
              type="text"
              placeholder="Linkedin URL"
              name="linkedIn"
              onChange={onChange}
              value={linkedIn}
            />
          </div>

          <div className="form-group social-input">
            <i className="fab fa-instagram fa-2x"></i>
            <input
              type="text"
              placeholder="Instagram URL"
              name="instagram"
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <a className="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default CreateProfile;
