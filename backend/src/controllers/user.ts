import { NextFunction, Request, Response, Router } from "express";
import { checkJwt } from "../Middleware/authorize-role";
import { Roles } from "../models/Enums/roles";
import { IGetUserAuthInfoRequest } from "../models/ExtendReq";
import { UserDTO } from "../models/User";
import { findByEmail } from "../services/authentication";

class UserController {
  public basePath: string = "/user";
  public router: Router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.basePath + "/profile", checkJwt(Roles.USER), this.getProfile);
  }

  getProfile(req: IGetUserAuthInfoRequest, res: Response) {
    
    
   res.json(req.user)

    
  }
}

export default UserController;
