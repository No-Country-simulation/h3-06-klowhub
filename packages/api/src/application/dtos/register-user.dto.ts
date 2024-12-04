import {
  Equals,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({
    example: 'johndoe',
    description:
      'Nombre de usuario único. Debe tener entre 3 y 30 caracteres y solo puede contener letras, números, puntos, guiones o guiones bajos.',
  })
  @IsString()
  @Matches(/^[a-zA-Z0-9._-]{3,30}$/, {
    message:
      'El userName debe tener entre 3 y 30 caracteres y solo puede contener letras, números, puntos, guiones o guiones bajos.',
  })
  @MaxLength(30, {
    message: 'El userName no debe superar los 30 caracteres.',
  })
  userName: string;

  @ApiProperty({
    example: 'John Doe',
    description:
      'Nombre completo del usuario. Debe tener entre 3 y 100 caracteres.',
  })
  @IsString()
  @MinLength(3, {
    message: 'El nombre completo debe tener al menos 3 caracteres.',
  })
  @MaxLength(100, {
    message: 'El nombre completo no debe superar los 100 caracteres.',
  })
  fullName: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'Correo electrónico del usuario. Debe ser único y válido.',
  })
  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  @MinLength(5, { message: 'El email debe tener al menos 5 caracteres.' })
  @MaxLength(100, { message: 'El email no debe superar los 100 caracteres.' })
  email: string;

  @ApiProperty({
    example: 'Password@123',
    description:
      'Contraseña segura. Debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.',
  })
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.',
    },
  )
  password: string;

  @ApiProperty({
    example: true,
    description: 'Debe ser verdadero para indicar que se aceptan los términos.',
  })
  @IsBoolean({ message: 'Por favor, indique si acepta los términos y condiciones.' })
  @Equals(true, { message: 'Debe aceptar los términos y condiciones para continuar.' })
  termsAccepted: boolean;
}
