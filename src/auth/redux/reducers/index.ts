//it will hold the listof all reducers in auth modulesred

import { AuthActionTypes } from "../types/AuthActionTypes";
import { AuthState } from "../types/AuthState";

import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../types/auth.constants";

const initialState: AuthState = {
  isAuthenticated: false,
  loading: true,
  userDetails: null,
  token: localStorage.getItem("token"),
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      console.log("inside the signup case");
      const token = action.payload.token;
      localStorage.setItem("token", token);
      return {
        ...state,
        isAuthenicated: true,
        loading: false,
        token: token,
      };
    default:
      return state;
  }
};

export default authReducer;
