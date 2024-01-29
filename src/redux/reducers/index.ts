// rootReducer.
import { combineReducers } from "redux";
import authReducer from "../../auth/redux/reducers";
import coreReducer from "../../core/redux/reducers";
import { useDispatch } from "react-redux";
import profileReducer from "../../profile/redux/reducers";
const rootReducer = combineReducers({
  authReducer: authReducer,
  coreReducer,
  profileReducer: profileReducer,
});

export default rootReducer;
