import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginUseCase } from '../../application/use-case/login-user.use-case';
import { RegisterUserUseCase } from '../../application/use-case/register-user.use-case';
import { userSchema } from '../../domain/models/user.model';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { EmailService } from '../../infrastructure/utils/email.service';
import { PasswordUtil } from '../../infrastructure/utils/password.util';
import { AuthController } from '../controllers/auth.controller';
import { MongoSanitizeMiddleware } from '../middlewares/mongo-sanitize.middleware';
import { ConfirmUserUseCase } from '@/application/use-case/confirm-user.use-case';
//TODO: Descomentar para produccion
//import { ThrottleMiddleware } from '../middlewares/throttle.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    ConfirmUserUseCase,
    LoginUseCase,
    UserRepository,
    RegisterUserUseCase,
    PasswordUtil,
    EmailService,
  ],
  exports: [UserRepository],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(ThrottleMiddleware, MongoSanitizeMiddleware)
      .apply(MongoSanitizeMiddleware)
      .forRoutes(AuthController);
  }
}
