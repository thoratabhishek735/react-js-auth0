import { NextFunction, Request, Response, Router } from 'express';
import jwtDecode from 'jwt-decode';
import User from '../DB/Schemas/User';
import { UserDTO } from '../models/User';
import { findByEmail, signUp } from '../services/authentication';
import jwt from "jsonwebtoken";

class AuthController{
    public basePath:string = "/auth"
    public router:Router = Router()
    constructor(){
      this.initializeRoutes()
    }
    
    initializeRoutes(){
       
        this.router.post(this.basePath+"/signup",this.userSignup);
        this.router.post(this.basePath+"/login",this.userLogin);
    }

    async userSignup(req:Request,res:Response){

      try {
      const response = await signUp(req.body);

      if(response === "success"){
         res.status(201).json({message:"User created successfully"})
      }
      } catch (error) {
         res.status(500).json({error})
      }   
    }

    async userLogin(req:Request,res:Response){       
      const token = <string>req.headers["auth"];
      const data =<any> jwtDecode(token);
      findByEmail(data.email).then((user:any) =>{
        const token = jwt.sign(user.toJSON(),process.env.SECRET);
        res.send(token)
      }).catch(err => console.log(err) )
    }


    
}

export default AuthController