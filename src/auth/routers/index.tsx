import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import Register2 from "../components/Register2";

type Props = {};

const AuthRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/register" element={<Register2></Register2>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
};

export default AuthRouter;
