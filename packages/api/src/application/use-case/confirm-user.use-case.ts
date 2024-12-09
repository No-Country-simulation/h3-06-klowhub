import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class ConfirmUserUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(token: string): Promise<{ message: string }> {
    try {
      // Verificar el token JWT
      const decoded = this.jwtService.verify(token);

      // Buscar al usuario por email en la base de datos
      const user = await this.userRepository.findByEmail(decoded.email);
      if (!user) {
        throw new BadRequestException({
            status: 'error',
            message: 'Usuario no encontrado.',
        });
      }

      // Verificar que el token coincide con el almacenado
      if (user.confirmationToken !== token) {
        throw new BadRequestException({
            status: 'error',
            message: 'El token no coincide.',
        });
      }


      // Verificar si el usuario ya está activo
      if (user.isActive) {
        return { message: 'La cuenta ya está confirmada.' };
      }

      // Actualizar el estado del usuario a activo
      user.isActive = true;
      user.confirmationToken = ""; // Opcional: eliminar el token
      await this.userRepository.update(user);

      return { message: 'Cuenta confirmada exitosamente.' };
    } catch (error:any) {
      throw new BadRequestException({
        status: 'error',
        message: error.message || 'Token inválido o expirado.',
      });
    }
  }
}
