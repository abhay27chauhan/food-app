const axios = require("axios");
const axiosApiInstance = axios.create({ baseURL: "http://localhost:5000" });

axiosApiInstance.interceptors.request.use(
  (req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }

    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
