/*
rootreducer
store createHook
middlewarespec
devtool extn

*/
import thunk, { ThunkMiddleware } from "redux-thunk";
import { Store, applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from "react-redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AppState } from "../hooks";

const middleware = [thunk as ThunkMiddleware];
const enhanceCompose = composeWithDevTools({});
const store: Store<AppState, any> = createStore(
  rootReducers,
  enhanceCompose(applyMiddleware(...middleware))
);

export default store;
