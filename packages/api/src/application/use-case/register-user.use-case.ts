import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { IUser } from '../../domain/interfaces/user.interface';
import { EmailService } from '../../infrastructure/utils/email.service';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordUtil: PasswordUtil,
    private readonly emailService: EmailService,
  ) {}

  async execute(registerUserDto: RegisterUserDto): Promise<IUser> {
    const existingUser = await this.userRepository.findByEmail(
      registerUserDto.email,
    );
    if (existingUser) {
      throw new BadRequestException('El correo ya está registrado.');
    }

    const hashedPassword = await this.passwordUtil.hashPassword(
      registerUserDto.password,
    );

    const newUser: Partial<IUser> = {
      userName: registerUserDto.userName,
      fullName: registerUserDto.fullName,
      email: registerUserDto.email,
      password: hashedPassword,
    };

    const createdUser = await this.userRepository.create(newUser);

    const confirmationLink = `http://localhost:3000/auth/confirm?email=${createdUser.email}`;

    await this.emailService.sendConfirmationEmail(
      createdUser.email,
      createdUser.userName,
      confirmationLink,
    );

    return createdUser;
  }
}
