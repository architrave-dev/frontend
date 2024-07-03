import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: 1000,
});

const auth = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("auth")}`,
  },
});

const api = {
  axiosInstance,
  auth,
};

export { api };
