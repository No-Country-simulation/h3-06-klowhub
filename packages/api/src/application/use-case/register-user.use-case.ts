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
    const hashedPassword = await this.passwordUtil.hashPassword(
      registerUserDto.password,
    );

    const newUser: IUser = {
      userName: registerUserDto.userName,
      email: registerUserDto.email,
      password: hashedPassword,
    } as IUser;

    const createdUser = await this.userRepository.create(newUser);

    return new UserEntity(
      createdUser.userName,
      createdUser.email,
      createdUser.password,
    );
  }
}
