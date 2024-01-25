import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../core/components/layouts/Landing";
import AuthRouter from "../auth/routers";

type Props = {};

const RootRouter = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;
