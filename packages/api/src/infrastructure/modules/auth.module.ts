import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../domain/models/user.model';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RegisterUserUseCase } from '../../application/use-case/register-user.use-case';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { AuthController } from '../controllers/auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]), // Registra el modelo User aquí
  ],
  controllers: [AuthController],
  providers: [UserRepository, RegisterUserUseCase, PasswordUtil],
  exports: [UserRepository], // Si necesitas usarlo fuera del AuthModule
})
export class AuthModule {}
