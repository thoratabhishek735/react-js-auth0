import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Success from "../containers/Success";
import VerifyEmail from "../containers/VerifyEmail";
import { ROUTES_PATH } from "./path-constants";
import Authorize from "../containers/Authorize";
import Dashboard from "../containers/Dashboard";

export default createBrowserRouter([
  {
    path: ROUTES_PATH.SIGNUP,
    element: <Signup />,
  },
  {
    path: ROUTES_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES_PATH.SUCCESS,
    element: <Success />,
  },

  {
    path: ROUTES_PATH.VERIFY_EMAIL,
    element: <VerifyEmail />,
  },
  {
    path: ROUTES_PATH.AUTHORIZE,
    element: <Authorize />,
  },
  {
    path: ROUTES_PATH.DASHBOARD,
    element: <Dashboard />,
  },
]);
