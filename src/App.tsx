import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./core/components/layouts/Navbar";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./routers/RootRouter";
import AuthRouter from "./auth/routers";
import MainRouter from "./routers";

type Props = {};

const App = (props: Props) => {
  const [appName, setAppName] = useState("devConnect");
  return (
    <>
      <Navbar appName={appName}></Navbar>
      <MainRouter></MainRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
