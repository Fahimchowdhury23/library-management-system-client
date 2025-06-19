import axios from "axios";
import React, { use } from "react";
import AuthContext from "../../Contexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://library-management-system-server-kgsopxubu.vercel.app/",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = use(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error(error);
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
