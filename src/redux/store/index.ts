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

const middleware = [thunk as ThunkMiddleware];
const enhanceCompose = composeWithDevTools({});
const store: Store<AppState, any> = createStore(
  rootReducers,
  enhanceCompose(applyMiddleware(...middleware))
);

export type AppState = ReturnType<typeof rootReducers>;
export default store;
