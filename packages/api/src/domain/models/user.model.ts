import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

// Definición del esquema de Mongoose
export const userSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Modelo de usuario
export const User = model<IUser>('User', userSchema);

// Clase de entidad para instancias de usuario
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
