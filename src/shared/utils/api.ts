import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

// api.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     //console.log(err.response.data, "from api file");
//     console.log("inside the api file");
//     let errObject: any = {};
//     err.response.data.errors.forEach((err: any) => {
//       errObject[err.param] = err.msg;
//     });
//     return Promise.reject(errObject);
//     // here we need to have a single erorr reponse object
//   }
// );

export default api;
