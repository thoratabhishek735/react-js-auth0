import React, { useCallback, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { toastContainer } from "../../utils/toast";
import { authWebLogout } from "../../utils/auth0";

import {
  getIdToken,
  getToken,
  getUser,
  getCompany,
  handleCallback,
  logout,
  authLogin,
} from "../../utils/auth0-spa";
import { setAuthData } from "../../modules/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../../routes/path-constants";
import { getProfile, login } from "../../utils/api";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    handleAuth();
  }, [loading]);

  const handleAuth = async () => {
    await handleCallback().catch((error) => {
      if (error.message === "Permissions error") {
        logout();
        authWebLogout();
      }
    });

    const accessToken = await getToken({
      detailedResponse: false,
    });

    const idToken = await getIdToken();
    const userData = await getUser();

    // setAuthData({ accessToken, idToken, userData, companyData });

    dispatch(setAuthData({ idToken, userData, accessToken }));

    login()
      .then((res) => {
        dispatch(setAuthData({ idToken: res?.data }));
        setTimeout(() => {
          navigate(ROUTES_PATH.DASHBOARD);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return loading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <></>
  );
};

export default Success;
