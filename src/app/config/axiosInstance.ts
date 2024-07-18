import axios from "axios";

const axiosConfig = {
  baseUrl: import.meta.env.BACKEND_API,
  timeout: 1000,
};

const axiosInstance = axios.create({
  ...axiosConfig,
});

const auth = axios.create({
  ...axiosConfig,
  headers: {
    Authorization: `Bearer ${localStorage.get("auth")}`,
  },
});

export const api = {
  axiosInstance,
  auth,
};
