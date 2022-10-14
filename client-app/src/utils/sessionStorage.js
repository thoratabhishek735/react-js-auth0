const USER_EMAIL = "email";
const USER_ID = "user_id";
const SOCIAL_SIGNUP_TYPE = "socialSignupType";
const VERIFICATION_TYPE = "verificationType";
const EMAIL_TOKEN = "emailToken";

export const getUserEmail = () => {
  try {
    return sessionStorage.getItem(USER_EMAIL);
  } catch (err) {
    return "";
  }
};
export const saveUserEmail = data => {
  try {
    sessionStorage.setItem(USER_EMAIL, data);
  } catch (err) {
    return "";
  }
};

export const removeUserEmail = () => {
  try {
    sessionStorage.removeItem(USER_EMAIL);
  } catch (err) {
    console.log(err);
  }
};

export const getSocialSignupType = () => {
  try {
    return sessionStorage.getItem(SOCIAL_SIGNUP_TYPE);
  } catch (err) {
    return "";
  }
};
export const saveSocialSignupType = data => {
  try {
    sessionStorage.setItem(SOCIAL_SIGNUP_TYPE, data);
  } catch (err) {
    return "";
  }
};

export const removeSocialSignupType = () => {
  try {
    sessionStorage.removeItem(SOCIAL_SIGNUP_TYPE);
  } catch (err) {
    console.log(err);
  }
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};

export const getUserId = () => {
  try {
    return sessionStorage.getItem(USER_ID);
  } catch (err) {
    return "";
  }
};
export const saveUserId = data => {
  try {
    sessionStorage.setItem(USER_ID, data);
  } catch (err) {
    return "";
  }
};

export const removeUserId = () => {
  try {
    sessionStorage.removeItem(USER_ID);
  } catch (err) {
    console.log(err);
  }
};

export const getVerificationType = () => {
  try {
    return sessionStorage.getItem(VERIFICATION_TYPE);
  } catch (err) {
    return "";
  }
};
export const saveVerificationType = data => {
  try {
    sessionStorage.setItem(VERIFICATION_TYPE, data);
  } catch (err) {
    return "";
  }
};

export const removeVerificationType = () => {
  try {
    sessionStorage.removeItem(VERIFICATION_TYPE);
  } catch (err) {
    console.log(err);
  }
};
export const getEmailToken = () => {
  try {
    return sessionStorage.getItem(EMAIL_TOKEN);
  } catch (err) {
    return "";
  }
};
export const saveEmailToken = data => {
  try {
    sessionStorage.setItem(EMAIL_TOKEN, data);
  } catch (err) {
    return "";
  }
};
