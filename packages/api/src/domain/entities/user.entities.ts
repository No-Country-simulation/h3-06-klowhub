import bcrypt from 'bcrypt';

export class UserEntity {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  confirmationToken?: string;
  roles: string[];
  _id?: string;

  constructor(
    userName: string,
    fullName: string,
    email: string,
    password: string,
    isActive = false,
    confirmationToken?: string,
    _id?: string,
    roles: string[] = ['USUARIO_ESTANDAR'],
  ) {
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
    this.confirmationToken = confirmationToken;
    this.roles = roles;
    this._id = _id;
  }

  // Método para asignar roles
  assignRole(role: string): void {
    if (!this.roles.includes(role)) {
      this.roles.push(role);
    }
  }

  // Método para verificar si una contraseña coincide
  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  // Método para aplicar el hashing de la contraseña
  async hashPassword(): Promise<void> {
    if (!this.password) {
      throw new Error('La contraseña no puede estar vacía.');
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
