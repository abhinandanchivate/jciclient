import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";

type Props = {};

const DashboardRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default DashboardRouter;
