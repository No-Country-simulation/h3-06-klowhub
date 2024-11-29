import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository'
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dtos/login-user.dto';


@Injectable()
export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;

    // Buscar el usuario por email
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await user.validatePassword(password))) {
      throw new Error('Invalid credentials');
    }

    // Generar token JWT
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
}
