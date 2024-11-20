import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../domain/models/user.model';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RegisterUserUseCase } from '../../application/use-case/register-user.use-case';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { AuthController } from '../controllers/auth.controller';
import { ThrottleMiddleware } from '../middlewares/throttle.middleware';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [AuthController],
  providers: [UserRepository, RegisterUserUseCase, PasswordUtil],
  exports: [UserRepository],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ThrottleMiddleware).forRoutes('auth/register');
  }
}
