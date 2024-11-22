import { IUser } from './users';

// User Register Type
export type TSignUpUser = {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
};

// User Login Type
export type TSignInUser = Omit<TSignUpUser, 'fullname' | 'username'>;

// User Register Validation Type
export type TFormState =
  | {
      error?: {
        fullname?: string;
        username?: string;
        email?: string;
        password?: string;
      };
      message?: string;
    }
  | undefined;

export type TLoggedUser = {
  user: Omit<IUser, 'password'>;
  accessToken: string;
  refreshToken: string;
};
