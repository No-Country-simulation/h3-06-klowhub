import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsBoolean,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9._-]{3,30}$/, {
    message:
      'El userName debe tener entre 3 y 30 caracteres y solo puede contener letras, números, puntos, guiones o guiones bajos.',
  })
  @MaxLength(30, {
    message: 'El userName no debe superar los 30 caracteres.',
  })
  userName: string;
  @IsString()
  @MinLength(3, {
    message: 'El nombre completo debe tener al menos 3 caracteres.',
  })
  @MaxLength(100, {
    message: 'El nombre completo no debe superar los 100 caracteres.',
  })
  fullName: string;

  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  @MinLength(5, { message: 'El email debe tener al menos 5 caracteres.' })
  @MaxLength(100, { message: 'El email no debe superar los 100 caracteres.' })
  email: string;

  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.',
    },
  )
  password: string;

  @IsBoolean({ message: 'Debe aceptar los términos y condiciones.' })
  termsAccepted: boolean;
}
