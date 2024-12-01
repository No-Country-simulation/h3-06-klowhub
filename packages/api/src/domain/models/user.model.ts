import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Interfaz del usuario
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

  validatePassword(password: string): Promise<boolean>;
  assignRole(role: string): void;
  hashPassword(): Promise<void>;
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

// Middleware pre-guardar para hash de contraseñas
userSchema.pre<IUser>('save', async function (next) {
  // if (!this.isModified('password')) {
  //   return next();
  // }
  // await this.hashPassword(); // Usar el método de la instancia
  next();
});

// Método para validar contraseñas
userSchema.methods.validatePassword = async function (
  password: string,
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.assignRole = function (role: string): void {
  if (!this.roles.includes(role)) {
    this.roles.push(role);
  }
};

userSchema.methods.hashPassword = async function (): Promise<void> {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

export const User = model<IUser>('User', userSchema);
