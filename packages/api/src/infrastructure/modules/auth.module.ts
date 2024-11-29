import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../domain/models/user.model';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RegisterUserUseCase } from '../../application/use-case/register-user.use-case';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { AuthController } from '../controllers/auth.controller';
import { ThrottleMiddleware } from '../middlewares/throttle.middleware';
import { EmailService } from '../../infrastructure/utils/email.service';
import { LoginUseCase } from '../../application/use-case/login-user.use-case';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }]), JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [AuthController],
  providers: [LoginUseCase, UserRepository, RegisterUserUseCase, PasswordUtil, EmailService],
  exports: [UserRepository],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ThrottleMiddleware).forRoutes('auth/register');
  }
}
