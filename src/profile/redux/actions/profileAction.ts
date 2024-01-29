import { Dispatch } from "react";
import { GetProfileType, ProfileErrorType } from "../types/ProfileActionTypes";
import { getCurrentUserProfile } from "../../services/profile.service";
import { GET_PROFILE, PROFILE_ERROR } from "../types/profile.constants";

const getCurrentUserProfileAction =
  () => async (dispatch: Dispatch<GetProfileType | ProfileErrorType>) => {
    try {
      const response = await getCurrentUserProfile();

      dispatch({ type: GET_PROFILE, payload: response.data } as GetProfileType);
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          status: "400",
          statusText: "Bad request",
        },
      } as ProfileErrorType);
    }
  };

export default getCurrentUserProfileAction;
