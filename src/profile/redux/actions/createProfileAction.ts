import { NavigateFunction } from "react-router-dom";
import { ProfileType } from "../types/ProfileType";
import {
  ProfileErrorType,
  UpdateProfileType,
} from "../types/ProfileActionTypes";
import { Dispatch } from "react";
import { createUserProfile } from "../../services/profile.service";
import { PROFILE_ERROR, UPDATE_PROFILE } from "../types/profile.constants";

const CreateProfileAction =
  (data: ProfileType, navigate: NavigateFunction) =>
  async (dispatch: Dispatch<UpdateProfileType | ProfileErrorType>) => {
    try {
      debugger;
      console.log("received data", data);
      const response = await createUserProfile(data);
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data,
      } as UpdateProfileType);
      navigate("/dashboard");
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          status: "400",
          statusText: "bad request",
        },
      });
    }
  };

export default CreateProfileAction;
