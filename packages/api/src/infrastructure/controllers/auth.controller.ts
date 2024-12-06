import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  HttpStatus,
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
import { Response } from 'express';
interface RequestWithCookies extends Request {
  cookies: { [key: string]: string };
}


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
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken, id, userName, roles } = await this.loginUseCase.execute(loginDto);

     response.cookie('accessToken', accessToken, {
      httpOnly: true, // Previene acceso desde JavaScript en el navegador
      sameSite: 'strict', // Evita que la cookie se envíe en solicitudes de origen cruzado
      maxAge: 1000 * 60 * 60, // Expira en 1 hora
    });

    response.cookie('refreshToken', refreshToken, {
      httpOnly: true, // Previene acceso desde JavaScript en el navegador
      sameSite: 'strict', // Evita que la cookie se envíe en solicitudes de origen cruzado
      maxAge: 1000 * 60 * 60 * 24 * 7, // Expira en 7 días
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Login exitoso',
      data: {
        id: id,
        userName: userName,
        roles: roles, 
      },
    };
    
  }  

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refrescar el access token' })
  @ApiResponse({ status: 200, description: 'Access token actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Refresh token inválido o no proporcionado' })
  async refreshAccessToken(
    @Req() req: RequestWithCookies,
    @Res({ passthrough: true }) res: Response,
  ) {
    // Extraer el refresh token de las cookies
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      throw new BadRequestException('Refresh token no proporcionado.');
    }

    try {
      // Verificar y generar un nuevo access token
      const { newAccessToken } = await this.loginUseCase.refreshAccessToken(refreshToken);

      // Configurar la cookie con el nuevo access token
      res.cookie('accessToken', newAccessToken, {
        httpOnly: true, // Seguridad: solo accesible desde el servidor
        sameSite: 'strict', // Evitar solicitudes de origen cruzado
        maxAge: 1000 * 60 * 60, // Expira en 1 hora
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Access token actualizado exitosamente'
      };
    } catch (error) {
      throw new BadRequestException('Error al refrescar el token: ' + error);
    }
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



