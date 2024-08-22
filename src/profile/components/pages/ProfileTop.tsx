import React from "react";
import { IUserType, ProfileType } from "../../redux/types/ProfileType";

type Props = {
  profile: ProfileType;
};

const ProfileTop = ({ profile }: Props) => {
  const {
    company,
    user = {} as IUserType,
    social: { twitter, linkedIn, youtube, facebook } = {},
    location,
    website,
    status,
  } = profile;

  const socialFields = Object.entries(profile.social || {}) as [
    string,
    string
  ][];
  const { _id: ID, name, avatar } = user as IUserType;

  return (
    <>
      <div className="profile-top bg-primary p-2">
        <img className="round-img my-1" src={avatar} alt="" />
        <h1 className="large">{name}</h1>
        <p className="lead">
          {status} {company ? <span> at {company}</span> : null}
        </p>
        <p>{location ? <span>{location}</span> : null}</p>
        <div className="icons my-1">
          {website ? (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x" />
            </a>
          ) : null}
          {socialFields
            ? Object.entries(socialFields)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <a
                    key={key}
                    // href={value}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className={`fab fa-${key} fa-2x`}></i>
                  </a>
                ))
            : null}
        </div>
      </div>
    </>
  );
};

export default ProfileTop;
