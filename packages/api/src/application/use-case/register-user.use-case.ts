import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserEntity } from '../../domain/models/user.model';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { IUser } from '../../domain/interfaces/user.interface';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordUtil: PasswordUtil,
  ) {}

  async execute(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    // Hashear la contraseña
    const hashedPassword = await this.passwordUtil.hashPassword(
      registerUserDto.password,
    );

    // Crear un objeto que cumpla completamente con la interfaz IUser
    const newUser: IUser = {
      userName: registerUserDto.userName,
      email: registerUserDto.email,
      password: hashedPassword,
    } as IUser; // Asegurar que cumple con IUser

    // Guardar en la base de datos
    const createdUser = await this.userRepository.create(newUser);

    // Mapear el resultado a UserEntity
    return new UserEntity(
      createdUser.userName,
      createdUser.email,
      createdUser.password,
    );
  }
}
