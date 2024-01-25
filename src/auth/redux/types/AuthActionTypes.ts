import { UserType } from "./UserType";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  USER_LOADED,
  USER_NOT_LOADED,
} from "./auth.constants";

export interface SignupSuccessType {
  type: typeof SIGNUP_SUCCESS;
  payload: {
    token: string;
  };
}
export interface SignupFailType {
  type: typeof SIGNUP_FAIL;
}
export interface UserLoadedType {
  type: typeof USER_LOADED;
  payload: UserType;
}
export interface UserNotLoadedType {
  type: typeof USER_NOT_LOADED;
}
export interface AuthErrorType {
  type: typeof AUTH_ERROR;
}
export interface LoginSuccessType {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}
export interface LoginFailType {
  type: typeof LOGIN_FAIL;
}
export interface LogoutType {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | SignupSuccessType
  | SignupFailType
  | UserLoadedType
  | UserNotLoadedType
  | AuthErrorType
  | LoginSuccessType
  | LoginFailType
  | LogoutType;
