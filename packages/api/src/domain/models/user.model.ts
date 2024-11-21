import { Schema, Document, model } from 'mongoose';

// Extensión de la interfaz para incluir fullName
export interface IUser extends Document {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean; // Estado de activación del usuario
  confirmationToken?: string; // Token opcional para confirmar la cuenta
  createdAt?: Date; // Fecha de creación
  updatedAt?: Date; // Fecha de última actualización
}

// Esquema actualizado
export const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    fullName: { type: String, required: true }, // fullName es obligatorio
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: false }, // Por defecto no está activo
    confirmationToken: { type: String, required: false }, // Campo opcional para el token de confirmación
  },
  {
    timestamps: true, // Habilitar automáticamente createdAt y updatedAt
  },
);

export const User = model<IUser>('User', userSchema);

export class UserEntity {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  confirmationToken?: string;

  constructor(
    userName: string,
    fullName: string,
    email: string,
    password: string,
    isActive = false,
    confirmationToken?: string,
  ) {
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
    this.confirmationToken = confirmationToken;
  }
}
