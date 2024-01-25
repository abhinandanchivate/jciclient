import React from "react";
import { Routes, Route } from "react-router-dom";

import RootRouter from "./RootRouter";
import AuthRouter from "../auth/routers";
import ProfileRouter from "../profile/routers";

type Props = {};

const MainRouter = (props: Props) => {
  return (
    <>
      <RootRouter></RootRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter></AuthRouter>}></Route>
        <Route
          path="/profile/*"
          element={<ProfileRouter></ProfileRouter>}></Route>
      </Routes>
    </>
  );
};

export default MainRouter;
