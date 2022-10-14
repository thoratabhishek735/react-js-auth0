import { Typography,Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProfile } from '../../utils/api';
import { authWebLogout } from "../../utils/auth0";
import {
  logout,
} from "../../utils/auth0-spa";

export default function Dashboard() {
    const auth = useSelector(state => state?.auth)

    useEffect(() => {
     console.log(auth);

     getProfile()
    }, [])
    
  return (
      <Box sx={{py:6}}>
    <Box sx={{my:5}} textAlign="center">
        <Typography variant="h4">Dashboard</Typography>
    </Box>
    <Box>
        <Button onClick={()=>{
               logout();
               authWebLogout();
        }}>Log out</Button>
    </Box>
    </Box>
  )
}
