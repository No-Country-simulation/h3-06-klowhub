import { Document } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  confirmationToken?: string;
  validatePassword(password: string): Promise<boolean>;
  createdAt?: Date;
  updatedAt?: Date;
}
