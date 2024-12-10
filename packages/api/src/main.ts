import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { setupSwagger } from './infrastructure/config/swagger.config';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule, { logger });

    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT') || 3000;

    // Configuración global
    app.use(cookieParser());
    app.enableCors();
    app.use(helmet());
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        errorHttpStatusCode: 422,
      }),
    );

    setupSwagger(app);

    await app.listen(port);
    logger.log(`Application is running on: http://localhost:${port}`);
    logger.log(
      `Swagger documentation available at: http://localhost:${port}/api/docs`,
    );
  } catch (error) {
    logger.error('Failed to start the application', error);

    process.exit(1);
  }
}

bootstrap();
