import { Document } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  confirmationToken?: string;
  roles: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
