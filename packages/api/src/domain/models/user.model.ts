import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';
// Extensión de la interfaz para incluir fullName
export interface IUser extends Document {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean; // Estado de activación del usuario
  confirmationToken?: string; // Token opcional para confirmar la cuenta
  validatePassword(password: string): Promise<boolean>;
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
// Hook para encriptar contraseñas
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para validar contraseñas
userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

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
