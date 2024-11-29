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
import { LoginDto } from '@/application/dtos/login-user.dto';
import { LoginUseCase } from '@/application/use-case/login-user.use-case';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly userRepository: UserRepository,
    private readonly loginUseCase: LoginUseCase
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
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

    user.isActive = true;
    await user.save();

    return { message: 'Cuenta confirmada exitosamente.' };
  }
}
