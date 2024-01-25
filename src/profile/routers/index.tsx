import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../components/Profile";

type Props = {};

const ProfileRouter = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile></Profile>}></Route>
      </Routes>
    </>
  );
};

export default ProfileRouter;
