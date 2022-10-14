import User from "../DB/Schemas/User";
import { UserDTO } from "../models/User";

export const signUp = async (req: any) => {
  return User.findOne({ email: req.email })
    .then((user) => {
      if (user) {
        throw "User Already Exists";
      } else {
        const user = new User({
          email: req.email,
          roles: [req.role.toUpperCase()],
          providerId: req.authId,
        });

        return user
          .save()
          .then((res) => "success")
          .catch((err) => {
            throw err;
          });
      }
    })
    .catch((err) => {
      console.log("err", err);
      throw new Error(err);
    });
};

export const findByEmail = async(email:string) =>{
  return User.findOne({ email }).then((user: any) => {
    return user;
  }).catch((err) => {
    throw err;
  });
}
