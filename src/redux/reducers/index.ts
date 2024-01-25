// rootReducer.
import { combineReducers } from "redux";
import authReducer from "../../auth/redux/reducers";
const rootReducer = combineReducers({
  authReducer: authReducer,
});
export default rootReducer;
