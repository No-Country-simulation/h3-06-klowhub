import { Schema, model } from 'mongoose';

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

export const userSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    confirmationToken: {
      type: String,
      required: false,
    },
    roles: {
      type: [String],
      default: ['USUARIO_ESTANDAR'],
      enum: ['ADMINISTRADOR', 'VENDEDOR', 'COMPRADOR', 'USUARIO_ESTANDAR'],
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>('User', userSchema);
