import { BaseModel } from "./base-model";
import { LooseObject } from "./LooseObject";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export class UserDTO extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  provider: string;
  providerId: string;
  roles: [UserRole];

  constructor(json: any) {
    super(json);
    this.firstName = json.firstName;
    this.lastName = json.lastName;
    this.email = json.email;
    this.avatar = json.avatar;
    this.provider = json.provider;
    this.providerId = json.providerId;
    this.roles = json.roles;
  }

  serialize(): LooseObject {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      avatar: this.avatar,
      provider: this.provider,
      providerId: this.providerId,
      roles: this.roles,
      id: this._id,
    };
  }
}
