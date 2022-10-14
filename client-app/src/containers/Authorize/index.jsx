import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { authLogin } from "../../utils/auth0-spa";

const Authorize = () => {
  useEffect(async () => {
    //login to auth0 after getting authroize in order to get user sessions and details
    async function login() {
      await authLogin();
      return;
    }
    login();
  }, []);

  return (
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
  );
};

export default Authorize;