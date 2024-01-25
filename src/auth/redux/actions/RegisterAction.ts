import { callbackify } from "util";
import { SignupParams } from "../types/auth.param";
import { Dispatch } from "redux";
import { SignupFailType, SignupSuccessType } from "../types/AuthActionTypes";

const registerAction =
  ({ name, email, password }: SignupParams) =>
  async (dispatch: Dispatch<SignupSuccessType | SignupFailType>) => {};
