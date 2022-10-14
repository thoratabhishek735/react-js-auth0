import axios from "axios";
import * as actions from "./modules/actions";
import { getToken } from "./utils/auth0-spa";

let store;

export const createInstanceandInjectStore = _store => {
  store = _store;

  const instance = axios.create({
    baseURL: `${window.location.protocol}//`,
  });

  instance.all = axios.all;
  instance.spread = axios.spread;

  axios.interceptors.request.use(
    config => {
      const token = store?.getState()?.auth?.idToken;
      if (token) {
        config.headers["auth"] = "Bearer " + token;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        return getToken({
          detailedResponse: true,
        })
          .then(value => {
            originalRequest._retry = true;

            store?.dispatch(actions.setAuthData({ idToken: value?.id_token }));

            originalRequest.headers["Authorization"] =
              "Bearer " + value?.id_token;

            return instance(originalRequest);
          })
          .catch(e => {
            console.log(e);
          });
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
