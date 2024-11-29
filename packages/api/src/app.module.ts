import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './infrastructure/config/database.service';
import { AuthModule } from './infrastructure/modules/auth.module';
import { CourseModule } from './infrastructure/modules/course.module'; // Importar el módulo de cursos

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
    CourseModule, // Registrar el módulo de cursos aquí
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
