import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { EmailService } from '../../infrastructure/utils/email.service';
import { UserEntity } from '../../domain/entities/user.entities';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordUtil: PasswordUtil,
    private readonly emailService: EmailService,
  ) {}

  async execute(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    // Verificar si el usuario ya existe por su email
    const existingUser = await this.userRepository.findByEmail(
      registerUserDto.email,
    );
    if (existingUser) {
      throw new BadRequestException('El correo ya está registrado.');
    }

    // Hashear la contraseña
    const hashedPassword = await this.passwordUtil.hashPassword(
      registerUserDto.password,
    );

    // Crear instancia de UserEntity
    const userEntity = new UserEntity(
      registerUserDto.userName,
      registerUserDto.fullName,
      registerUserDto.email,
      hashedPassword,
    );

    // Asignar el rol predeterminado
    userEntity.assignRole('USUARIO_ESTANDAR');

    // Guardar en la base de datos
    const createdUser = await this.userRepository.create(userEntity);

    // Generar enlace de confirmación
    const confirmationLink = `http://localhost:3000/auth/confirm?email=${createdUser.email}`;

    // Enviar correo de confirmación
    await this.emailService.sendConfirmationEmail(
      createdUser.email,
      createdUser.userName,
      confirmationLink,
    );

    return createdUser;
  }
}
