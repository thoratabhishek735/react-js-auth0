import {
    Box,
    Button,
    MenuItem,
    MenuList,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
import { manualLogin } from "../../utils/auth0";
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin=()=>{
       manualLogin({email,password})
    }
   
    return (
      <Box sx={{ p: 20 }} >
        <Typography variant="h1">Welcome - Log in here</Typography>
  
        <Box sx={{ my: 5 ,}}>
          <TextField
            sx={{ my: 3 }}
            fullWidth
            type="email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
  
          <TextField
            sx={{ my: 3 }}
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
  
          
          <Box sx={{ my: 5 }} textAlign="center">
            <Button variant="contained" color="primary" size="large" sx={{width:"300px"}} onClick={handleLogin}>Log in</Button>
          </Box>
        </Box>
      </Box>
    );
  }