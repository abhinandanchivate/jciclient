export interface LoginParamsType {
  email: string;
  password: string;
}

export interface SignupParams extends LoginParamsType {
  name: string;
}
