import { ClientErrorType } from "./ClientErrorType";
import { GithubRepoType } from "./GitHubRepoType";
import { ProfileType } from "./ProfileType";
import {
  CLEAR_PROFILE,
  CLEAR_PROFILES,
  DELETE_ACCOUT,
  GET_ALL_PROFILES,
  GET_GITHUB_REPOS,
  GET_PROFILE,
  GET_PROFILE_BY_ID,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILED,
} from "./profile.constants";
export interface GetProfileType {
  type: typeof GET_PROFILE;
  payload: ProfileType;
}
export interface GetProfileByIdType {
  type: typeof GET_PROFILE_BY_ID;
  payload: ProfileType;
}
export interface GetAllProfilesType {
  type: typeof GET_ALL_PROFILES;
  payload: ProfileType[];
}
export interface ProfileErrorType {
  type: typeof PROFILE_ERROR;
  payload: ClientErrorType;
}
export interface ClearProfileType {
  type: typeof CLEAR_PROFILE;
}
export interface ClearProfilesType {
  type: typeof CLEAR_PROFILES;
}
export interface UpdateProfileType {
  type: typeof UPDATE_PROFILE;
  payload: ProfileType;
}
export interface UpdateProfileFailedType {
  type: typeof UPDATE_PROFILE_FAILED;
}
export interface DeleteAccountType {
  type: typeof DELETE_ACCOUT;
}
export interface GetGithubReposType {
  type: typeof GET_GITHUB_REPOS;
  payload: GithubRepoType[];
}

export type ProfileActiontypes =
  | GetProfileType
  | GetProfileByIdType
  | GetAllProfilesType
  | ProfileErrorType
  | ClearProfileType
  | ClearProfilesType
  | UpdateProfileType
  | UpdateProfileFailedType
  | GetGithubReposType;
