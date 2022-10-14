import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../../utils/updateObject";

const initialState = {
  accessToken: "",
  idToken: "",
  userData: {},
  authenticatedAppUser: false,
  userType: "",
  eventId: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_DATA: {
      return updateObject(state, action.payload);
    }

    default:
      return state;
  }
};

export default auth;
