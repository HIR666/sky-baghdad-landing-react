import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "http://tdelta-laravel.test/api",
  baseURL: "https://ratback.tdelta.net/api",
  timeout: 60000 * 15,
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
