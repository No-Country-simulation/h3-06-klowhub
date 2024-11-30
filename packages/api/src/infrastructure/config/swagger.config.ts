import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API de KlowHub')
    .setDescription(
      `
  ### Acerca de KlowHub
KlowHub es una plataforma SaaS diseñada para ser el núcleo de la comunidad global de desarrolladores y usuarios en el ecosistema No Code y Low Code. Con un enfoque en gestión de contenido y productos digitales de plataformas líderes como AppSheet y Power Apps.  
  #### Características Principales
- Gestión de contenido y productos digitales de plataformas líderes como AppSheet y Power Apps.
- Fomento del aprendizaje continuo y colaboración entre profesionales.
- Conexión entre desarrolladores, educadores y empresas con usuarios que necesiten soluciones personalizadas.
- Monetización de conocimientos y habilidades en el entorno No Code/Low Code.

### Tecnologías Utilizadas
  - **NestJS**: Framework modular y robusto para aplicaciones Node.js.
  - **TypeScript**: Desarrollo con tipado fuerte para mayor seguridad.
  - **MongoDB (Mongoose)**: Base de datos NoSQL con mapeo de objetos.
  - **JWT**: Autenticación segura y eficiente.
  - **Bcrypt**: Encriptación de contraseñas.
  - **Class-Validator & Class-Transformer**: Validación y transformación de datos.
  - **Swagger**: Documentación interactiva de la API.
  - **Helmet**: Seguridad mejorada con encabezados HTTP.
  - **Nodemailer**: Envío de correos electrónicos.
  - **Express-Mongo-Sanitize**: Prevención de inyecciones en MongoDB.
  - **RxJS**: Programación reactiva.
  - **Prettier & ESLint**: Calidad y consistencia del código.
  - **Redis (ioredis)**: Caché de alto rendimiento.
  - **Nodemon**: Recarga automática en desarrollo.
  - **Jest & Supertest**: Pruebas unitarias y de integración.
  
  ### Recursos
  - [Documentación oficial de NestJS](https://docs.nestjs.com)
  - [Repositorio en GitHub](https://github.com/tu-usuario/tu-repositorio)
  `,
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Cursos', 'Gestión de cursos')
    .addTag('Módulos', 'Gestión de módulos')
    .addTag('Lecciones', 'Gestión de lecciones')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
}
