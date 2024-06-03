import axios from "axios";

const $axios = axios.create({
  baseURL: "https://asali-munafaa-be.vercel.app",
  // baseURL: "http://localhost:4000",
});

$axios.interceptors.request.use(
  async (config) => {
    // const accessToken = useCookie("accessToken").value;
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response.data;
  },
  (error) => {
    // Handle error response
    return Promise.reject(error);
  }
);

export default $axios;
