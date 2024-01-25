import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import Register3 from "../components/Register3";

type Props = {};

const AuthRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/register" element={<Register3></Register3>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
};

export default AuthRouter;
