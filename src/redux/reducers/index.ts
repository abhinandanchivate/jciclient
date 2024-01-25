// rootReducer.
import { combineReducers } from "redux";
import authReducer from "../../auth/redux/reducers";
import coreReducer from "../../core/redux/reducers";
import { useDispatch } from "react-redux";
const rootReducer = combineReducers({
  authReducer: authReducer,
  coreReducer,
});

export default rootReducer;
