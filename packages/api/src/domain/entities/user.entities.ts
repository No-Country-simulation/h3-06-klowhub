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
  assignRole(role: string): void {
    if (!this.roles.includes(role)) {
      this.roles.push(role);
    }
  }
}
