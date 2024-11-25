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

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly userRepository: UserRepository,
  ) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.registerUserUseCase.execute(registerUserDto);
  }

  @Get('confirm')
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
