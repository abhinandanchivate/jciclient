import { Middleware, Store, applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppState } from "../hooks";

// Define middleware as an array of Middleware, including thunk
const middleware: Middleware[] = [thunk];

// Enhance the store with DevTools and middleware
const enhanceCompose = composeWithDevTools({});
const store: Store<AppState, any> = createStore(
  rootReducer,
  enhanceCompose(applyMiddleware(...middleware)) // Spread middleware array
);

export default store;
