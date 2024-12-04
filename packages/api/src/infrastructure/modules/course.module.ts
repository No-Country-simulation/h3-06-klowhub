import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from '../controllers/course.controller';
import { CreateCourseUseCase } from '../../application/use-case/course/create-course.use-case';
import { AddModuleUseCase } from '../../application/use-case/modules/add-module.use-case'; // Importa el caso de uso
import { CourseRepository } from '../../infrastructure/repositories/course.repository';
import { ModuleRepository } from '../../infrastructure/repositories/module.repository';
import { CourseSchema } from '../../domain/models/course.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Course', schema: CourseSchema },
      /*   { name: 'Module', schema: moduleSchema },
      { name: 'Lesson', schema: lessonSchema }, */
    ]),
  ],
  controllers: [CourseController],
  providers: [
    CreateCourseUseCase,
    AddModuleUseCase,
    CourseRepository,
    ModuleRepository,
  ],
})
export class CourseModule {}
