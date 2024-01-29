import { ProfileActiontypes } from "../types/ProfileActionTypes";
import { ProfileState } from "../types/ProfileState";
import {
  GET_PROFILE,
  GET_PROFILE_BY_ID,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../types/profile.constants";

const initailState: ProfileState = {
  currentProfile: null,
  profiles: [],
  repos: [],
  error: {},
  loading: true,
};
const profileReducer = (
  state: ProfileState = initailState,
  action: ProfileActiontypes
) => {
  switch (action.type) {
    case GET_PROFILE:
    case GET_PROFILE_BY_ID:
    case UPDATE_PROFILE:
      return { ...state, currentProfile: action.payload, loading: false };
    case PROFILE_ERROR:
      console.log("inside the error");
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default profileReducer;
