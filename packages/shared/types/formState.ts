// User Register Validation Type
export type TFormState =
  | {
      error?: {
        fullName?: string[];
        userName?: string[];
        email?: string[];
        password?: string[];
        acceptSubscription?: boolean;
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;
