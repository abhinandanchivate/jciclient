import { Dispatch } from "react";
import api from "../../../shared/utils/api";
import { GetProfileType, ProfileErrorType } from "../types/ProfileActionTypes";
import { GET_PROFILE, PROFILE_ERROR } from "../types/profile.constants";

export const getProfileById =
  (userId: string) =>
  async (dispatch: Dispatch<GetProfileType | ProfileErrorType>) => {
    try {
      const res = await api.get(`/profile/user/${userId}`);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { status: "400", statusText: "" },
      });
    }
  };
