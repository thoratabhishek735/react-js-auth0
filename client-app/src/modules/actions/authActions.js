import * as actionTypes from "./actionTypes";

export const setAuthData = payload => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_AUTH_DATA,
      payload,
    });
  };
};
