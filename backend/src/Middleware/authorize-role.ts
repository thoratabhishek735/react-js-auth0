import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import { Roles } from "../models/Enums/roles";
import { IGetUserAuthInfoRequest } from "../models/ExtendReq";

export const checkJwt = (role:Roles) => {
  //Get the jwt token from the head

  return (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"];
    console.log(token);
    let jwtPayload;

    //Try to validate the token and get data
   
    try {
      jwtPayload = <any>jwt.verify(token, process.env.SECRET);

      if( jwtPayload.roles[0] == role){
          req.user = jwtPayload;
          next()
      }else{
        res.status(401).send();
      }
    } catch (error) {
      //If token is not valid, respond with 401 (unauthorized)
      console.log(error);
      res.status(401).send();
      return;
    }

 
  };
};
