import { callbackify } from "util";
import { SignupParams } from "../types/auth.param";
import { Dispatch } from "redux";
import { SignupFailType, SignupSuccessType } from "../types/AuthActionTypes";
import registerService from "../../services/auth.service";
import { IRegister } from "../../models/IRegister";
import { SIGNUP_SUCCESS } from "../types/auth.constants";

const registerAction =
  ({ name, email, password }: SignupParams) =>
  async (dispatch: Dispatch<SignupSuccessType | SignupFailType>) => {
    try {
      let register: IRegister = { name, email, password };
      const response = await registerService(register);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      } as SignupSuccessType);
    } catch (err) {}
  };
export default registerAction;
