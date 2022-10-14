import { model, Schema } from 'mongoose';
import lodash from 'lodash';
import { UserRole } from '../../models/User';


const userSchema: Schema = new Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    avatar: { type: String, required: false },
    provider:{ type: String, required: false },
    providerId:{ type: String, required: false },
    roles:{
        type:[String],
        enum:Object.keys(UserRole),
        default:UserRole.USER
    }
  },
  {
    collection: 'users',
    timestamps: true
  },
);

userSchema.index({
  'email': 1,
});



const User = model('User', userSchema);

export default User;
