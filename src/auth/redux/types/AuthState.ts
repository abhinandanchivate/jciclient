import { UserType } from "./UserType";

export interface AuthState {
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  userDetails: UserType | null;
}

// token : string

// userdetails : UserType(?)
// loading status:boolean
// isAuthenticated: boolean
