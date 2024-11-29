import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { RegisterUserUseCase } from '../../application/use-case/register-user.use-case';
import { RegisterUserDto } from '../../application/dtos/register-user.dto';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly userRepository: UserRepository,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.registerUserUseCase.execute(registerUserDto);
  }

  @Get('confirm')
  @ApiOperation({ summary: 'Confirmar una cuenta de usuario' })
  @ApiQuery({
    name: 'email',
    required: true,
    description: 'Correo electrónico del usuario a confirmar.',
  })
  @ApiResponse({ status: 200, description: 'Cuenta confirmada exitosamente.' })
  @ApiResponse({
    status: 400,
    description: 'Email no proporcionado o inválido.',
  })
  async confirmAccount(@Query('email') email: string) {
    if (!email) {
      throw new BadRequestException('El parámetro "email" es requerido.');
    }

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Usuario no encontrado.');
    }

    if (user.isActive) {
      return { message: 'La cuenta ya está confirmada.' };
    }

    // Actualizar el estado del usuario a "activo"
    user.isActive = true;
    const updatedUser = await this.userRepository.update(user);

    return {
      message: 'Cuenta confirmada exitosamente.',
      user: updatedUser,
    };
  }
}
