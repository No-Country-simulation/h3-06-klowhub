import { IUserShared } from '../models/IUserShared';

// User Register request Type
export type TSignUpUser = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  // acceptTerms: boolean;
};

// User Login request Type
export type TSignInUser = Omit<TSignUpUser, 'fullName' | 'userName'>;

// User Login Response Type
export type TLoggedUser = {
  user: {
    id: string;
    userName: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
};
