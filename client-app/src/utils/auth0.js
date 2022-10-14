import auth0 from "auth0-js";

import { clearSessionStorage } from "./sessionStorage";
import { clearLocalStorage } from "./localStorage";

async function webAuth() {

  try {
    let webAuthConfig = new auth0.WebAuth({
      domain: "dev-1bnr3k8w.us.auth0.com",
      clientID:"mMDnwgH45nMXS3MeuMan2c4XgVjgMWHj",
      responseType: "token id_token",
      scope: "offline_access openid",
      redirectUri: "http://localhost:3000/authorize",
    });
    return webAuthConfig;
  } catch (e) {
    console.error(e);
  }
}

export const otpStart = ({ email }) => {
  return new Promise(async (resolve, reject) => {
    const variables = {
      email,
      connection: "email",
      send: "link",
    };
    const webAuth0 = await webAuth();

    webAuth0.passwordlessStart(variables, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const createUser = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    const params = {
      connection: "Username-Password-Authentication",
      email: email,
      password: password,
      username: email,
      email_verified: false,
    };

    const webAuth0 = await webAuth();

    webAuth0.signup(params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const manualLogin = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    const webAuth0 = await webAuth();

    const params = {
      connection: "Username-Password-Authentication",
      username: email,
      password: password,
      grant_type: "password",
    };

    webAuth0.login(params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const passwordReset = ({ email }) => {
  return new Promise(async (resolve, reject) => {
    const variables = {
      email,
      connection: "Username-Password-Authentication",
      send: "link",
    };

    const webAuth0 = await webAuth();
    webAuth0.changePassword(variables, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const authWebLogout = async (
  returnTo = "http://localhost:3000/login"
) => {
  try {
    const webAuth0 = await webAuth();
    webAuth0.logout({
      returnTo: returnTo,
    });
    clearSessionStorage();
    clearLocalStorage();
  } catch (e) {
    console.log(e);
  }
};
