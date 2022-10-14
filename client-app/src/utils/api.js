import axios from "axios";

import { store } from "../modules";
const baseUri = "http://localhost:8000";


export const signup =(data)=>{
   
   return axios.post(baseUri+"/api/auth/signup",data)
}

export const getProfile = () =>{
   return axios.get(baseUri+"/api/user/profile")
}

export const login = () =>{
   return axios.post(baseUri+"/api/auth/login")
}