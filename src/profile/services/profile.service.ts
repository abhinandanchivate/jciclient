import api from "../../shared/utils/api";
import { ProfileType } from "../redux/types/ProfileType";

export const getCurrentUserProfile = () => {
  return api.get("/profile/me");
};

export const createUserProfile = (data: ProfileType) => {
  debugger;
  const { social, ...profileWithoutSocial } = data;
  console.log("inside the profile service", {
    ...social,
    ...profileWithoutSocial,
  });
  return api.post("/profile", { ...social, ...profileWithoutSocial });
  // types : and reqd jsonobjects for rest call are same.
  // create p[rofile : it req. social content : twitter:value.facebook:value
//{twitter:value, facebook:value}]
};

export default getCurrentUserProfile;
