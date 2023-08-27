import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  // const expectedError =
  //   error.response &&
  //   error.response.status >= 400 &&
  //   error.response.status < 500;
  if (error.response) {
    console.log("Logging Error : ", error);
    // log the error to server
  }
  return Promise.reject(error);
});
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};
export default http;
