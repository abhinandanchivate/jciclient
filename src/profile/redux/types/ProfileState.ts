// profile current
// profiles
//rep
// loaidng
// error

import { ClientErrorType } from "./ClientErrorType";
import { GithubRepoType } from "./GitHubRepoType";
import { ProfileType } from "./ProfileType";

export interface ProfileState {
  currentProfile: ProfileType | null;
  profiles: ProfileType[];
  repos: GithubRepoType | [];
  loading: boolean;
  error: ClientErrorType | {};
}
