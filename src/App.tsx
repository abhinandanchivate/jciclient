import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./core/components/layouts/Navbar";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./routers/RootRouter";
import AuthRouter from "./auth/routers";
import MainRouter from "./routers";
import { AppState, useAppDispatch, useAppSelector } from "./redux/hooks";
import setAuthToken from "./shared/utils/setAuthToken";
import userLoadedAction from "./auth/redux/actions/userLoadedAction";
import store from "./redux/store";
type Props = {};

store.dispatch(userLoadedAction());
// if we will have token the setto api by calling setAuthToken ==> it will be available to all.
const App = (props: Props) => {
  const { isAuthenticated, token } = useAppSelector(
    (store: AppState) => store.authReducer
  );
  const dispatch = useAppDispatch();

  if (token) {
    setAuthToken(token);
    //dispatch(userLoadedAction());
  }
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
