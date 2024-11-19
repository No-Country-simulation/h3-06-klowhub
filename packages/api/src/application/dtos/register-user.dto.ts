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
  @Matches(/^[A-Za-z]+\s[A-Za-z\s]+$/, {
    message: 'El nombre completo debe contener al menos dos palabras.',
  })
  @MaxLength(100, {
    message: 'El nombre completo no debe superar los 100 caracteres.',
  })
  userName: string;

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
