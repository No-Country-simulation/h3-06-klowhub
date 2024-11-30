export interface IUser {
  _id: String;
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  confirmationToken?: string;
  validatePassword(password: string): Promise<boolean>;
  roles: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// User Register request Type
export type TSignUpUser = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  acceptSubcription?: boolean;
};

// User Login request Type
export type TSignInUser = {
  email: string;
  password: string;
};

// User Login Response Type
export type TLoggedUser = {
  user: {
    _id: string;
    userName: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
};
