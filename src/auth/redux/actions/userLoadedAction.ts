import { Dispatch } from "redux";
import { UserLoadedType, UserNotLoadedType } from "../types/AuthActionTypes";
import { getUserDetails } from "../../services/auth.service";
import { USER_LOADED } from "../types/auth.constants";
import setAuthToken from "../../../shared/utils/setAuthToken";

const userLoadedAction =
  () => async (dispatch: Dispatch<UserLoadedType | UserNotLoadedType>) => {
    try {
      console.log("hello from user loaded");
      setAuthToken(localStorage.getItem("token") || "");
      const response = await getUserDetails();
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      } as UserLoadedType);
    } catch (err) {}
  };
export default userLoadedAction;
