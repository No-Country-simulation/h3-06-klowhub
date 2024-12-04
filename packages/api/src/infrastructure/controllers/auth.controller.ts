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
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ConfirmUserUseCase } from '@/application/use-case/confirm-user.use-case';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly userRepository: UserRepository,
    private readonly loginUseCase: LoginUseCase,
    private readonly confirmUseCase: ConfirmUserUseCase,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Logear un usuario' })
  @ApiResponse({ status: 200, description: 'Usuario logueado correctamente' })
  @ApiResponse({ status: 400, description: 'Error al loguear usuario' })
  async login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
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
    name: 'token',
    required: true,
    description: 'El token del usuario a confirmar.',
  })
  @ApiResponse({ status: 200, description: 'Cuenta confirmada exitosamente.' })
  @ApiResponse({
    status: 400,
    description: 'Token no proporcionado o inválido.',
  })
  async confirmAccount(@Query('token') token: string) {
    if (!token) {
      throw new BadRequestException({
        status: 'error',
        message: 'El parámetro "token" es requerido.',
    });
    }

    return await this.confirmUseCase.execute(token);
  }
}
