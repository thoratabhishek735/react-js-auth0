import lodash from 'lodash';
import { LooseObject } from './LooseObject';

export class BaseModel implements LooseObject {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(json: any) {
    if (json) {
      this._id = json._id;

      const createdAt = lodash.get(json, 'createdAt');
      if (createdAt) {
        this.createdAt = new Date(createdAt);
      }

      const updatedAt = lodash.get(json, 'updatedAt');
      if (updatedAt) {
        this.updatedAt = new Date(updatedAt);
      }
    }
  }
}
