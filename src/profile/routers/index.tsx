import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../components/Profile";
import CreateProfile from "../components/forms/CreateProfile";

type Props = {};

const ProfileRouter = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile></Profile>}></Route>
        <Route path="/create" element={<CreateProfile></CreateProfile>}></Route>
        <Route path="/edit" element={<CreateProfile></CreateProfile>}></Route>
      </Routes>
    </>
  );
};

export default ProfileRouter;
