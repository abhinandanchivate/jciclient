// we need to perform the rest call for registration
// end poiint : http://localhost:5005/api/users
// type : public
// desc : to perform the rest call for registration

import api from "../../shared/utils/api";
import { IRegister } from "../models/IRegister";

// accepts the data.
const registerService = (data: IRegister) => {
  return api.post<{ token: string }>("/users", data);
};

export default registerService;
