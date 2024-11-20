import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

export const userSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<IUser>('User', userSchema);

export class UserEntity {
  userName: string;
  email: string;
  password: string;

  constructor(userName: string, email: string, password: string) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}
