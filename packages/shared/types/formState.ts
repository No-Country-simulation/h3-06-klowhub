// User Register Validation Type
export type TFormState =
  | {
      error?: {
        fullName?: string[];
        userName?: string[];
        email?: string[];
        password?: string[];
        acceptTerms?: boolean;
      };
      message?: string;
    }
  | undefined;
