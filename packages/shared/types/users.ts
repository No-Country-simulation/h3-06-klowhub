export interface IUser {
  _id:String;
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
