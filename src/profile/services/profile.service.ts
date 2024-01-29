import api from "../../shared/utils/api";

export const getCurrentUserProfile = () => {
  return api.get("/profile/me");
};

export default getCurrentUserProfile;
