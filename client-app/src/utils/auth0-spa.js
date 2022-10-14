import createAuth0Client from "@auth0/auth0-spa-js";
import { saveSocialSignupType } from "./sessionStorage";
import {toastContainer} from "./toast"


let auth0Client;

async function initClient() {
  try {
    if (!auth0Client) {
      auth0Client = await createAuth0Client({
        domain: "dev-1bnr3k8w.us.auth0.com",
        client_id: "mMDnwgH45nMXS3MeuMan2c4XgVjgMWHj",
        redirect_uri: "http://localhost:3000/success",
        useRefreshTokens: true,
        scope: "openid profile email offline_access",
        // audience: "dev-1bnr3k8w.us.auth0.com/userinfo",
      });
    }

    return auth0Client;
  } catch (e) {
    console.error(e);
  }
}
initClient().then();

export async function authLogin(params) {
  const auth0 = await initClient();

  await auth0.loginWithRedirect(params);
}

export async function passwordlesslogin(params) {
  const auth0 = await initClient();

  await auth0.passwordlessStart(params);
}

export async function loginGoogle(params) {
  const auth0 = await initClient();
  saveSocialSignupType("google");
  await auth0.loginWithRedirect({
    connection: "google-oauth2",
    redirect_uri: "http://localhost:3000/success",
  });
}

export async function loginLinkedIn(params) {
  const auth0 = await initClient();
  saveSocialSignupType("linkedin");

  await auth0.loginWithRedirect({
    connection: "linkedin",
    redirect_uri: "http://localhost:3000/success",
  });
}

export async function getToken(params) {
  const auth0 = await initClient();
  let token;

  try {
    token = await auth0.getTokenSilently(params);
    return token;
  } catch (e) {
    if (e.message === "Login required") {
      toastContainer("Logout", "error");
    } else {
      console.log(e);
    }
  }
}

export async function getIdToken(params) {
  const auth0 = await initClient();
  let token;

  try {
    token = await auth0.getIdTokenClaims();
    return token.__raw;
  } catch (e) {
    console.log(e);
  }
}

export async function getUser(params) {
  console.log("pp")
  const auth0 = await initClient();
  const user = await auth0.getUser();
  return user;
}


export async function logout() {
  const auth0 = await initClient();
  await auth0.logout({
    returnTo: "http://localhost:3000/login",
  });
}

export async function handleCallback() {
  const auth0 = await initClient();
  return await auth0.handleRedirectCallback();
}

export default {
  getToken,
  getIdToken,
  logout,
  authLogin,
  getUser,
  loginGoogle,
};
