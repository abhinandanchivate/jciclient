import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";

type Props = {};

const AuthRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
};

export default AuthRouter;
