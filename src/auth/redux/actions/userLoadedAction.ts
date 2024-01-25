import { Dispatch } from "redux";
import { UserLoadedType, UserNotLoadedType } from "../types/AuthActionTypes";
import { getUserDetails } from "../../services/auth.service";
import { USER_LOADED } from "../types/auth.constants";

const userLoadedAction =
  () => async (dispatch: Dispatch<UserLoadedType | UserNotLoadedType>) => {
    try {
      console.log("hello from user loaded");
      const response = await getUserDetails();
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      } as UserLoadedType);
    } catch (err) {}
  };
export default userLoadedAction;
