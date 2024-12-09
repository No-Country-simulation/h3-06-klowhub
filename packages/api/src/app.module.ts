import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './infrastructure/config/database.service';
import { AuthModule } from './infrastructure/modules/auth.module';
import { CourseModule } from './infrastructure/modules/course.module';
import { AppController } from './app.controller'; // Importar AppController
import {ImagesModule} from '@/infrastructure/modules/images.module'
@Module({
  imports: [
    // Configuración global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexión a MongoDB
    MongooseModule.forRoot(process.env.DB_CONNECTION),

    // Módulo de autenticación
    AuthModule,

    // Módulo de cursos
    CourseModule,

ImagesModule
  ],
  controllers: [AppController], // Registrar AppController
  providers: [DatabaseService], // Registrar AppService
})
export class AppModule {}
