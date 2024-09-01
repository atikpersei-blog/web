import { Types, Schema, Document, model, models } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, require: true }
  },
  {
    timestamps: true,
  }
);


const User = models.User || model<IUser>('User', UserSchema);
export default User;

export interface User {
  _id: Types.ObjectId;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}