import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  // Habilitar CORS para permitir peticiones desde diferentes orígenes
  app.enableCors();

  // Configurar ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve propiedades no permitidas en los DTOs
      forbidNonWhitelisted: true, // Genera error si se detectan propiedades no permitidas
      transform: true, // Convierte los datos al tipo definido en el DTO
      errorHttpStatusCode: 422, // Cambia el código de estado a 422 para errores de validación
    }),
  );

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
