import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../../domain/models/user.model';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { RegisterUserUseCase } from '../../application/use-case/register-user.use-case';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { AuthController } from '../controllers/auth.controller';
//TODO: Descomentar para produccion
// import { ThrottleMiddleware } from '../middlewares/throttle.middleware';
import { EmailService } from '../../infrastructure/utils/email.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],
  controllers: [AuthController],
  providers: [UserRepository, RegisterUserUseCase, PasswordUtil, EmailService],
  exports: [UserRepository],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //TODO: Descomentar para produccion
    // consumer.apply(ThrottleMiddleware).forRoutes('auth/register');
  }
}
