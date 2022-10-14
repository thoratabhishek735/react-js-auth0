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
import { ROUTES_PATH } from "../../routes/path-constants";
import { signup } from "../../utils/api";
import { createUser } from "../../utils/auth0";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();


  const options = ["User", "Admin"];

  const handleRoleUpdate=(e)=>{
     setRole(e.target.value)
  }

  const handleSignup=()=>{
      createUser({email,password}).then(res =>{
         const payload = {
             authId: res.Id,
             email: res.email,
             password:password,
             role:role
         }

         signup(payload).then((res)=>{
         console.log(res)
         navigate(ROUTES_PATH.VERIFY_EMAIL)
         }
         ).catch(err => console.log(err) )
      }).catch(err =>  console.log(err) )
  }
  return (
    <Box sx={{ p: 20 }} >
      <Typography variant="h1">Welcome</Typography>

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

        <Select
          sx={{ my: 3 }}
          fullWidth
          label="Role"
          value={role}
          onChange={(e) => handleRoleUpdate(e)}
        >
            {options.map((item) => (
              <MenuItem value={item}> {item} </MenuItem>
            ))}
        </Select>

        <Box sx={{ my: 5 }} textAlign="center">
          <Button onClick={handleSignup} variant="contained" color="primary" size="large" sx={{width:"300px"}}>Sign up</Button>
        </Box>
      </Box>
    </Box>
  );
}
