// src/modules/course/course.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseController } from '../controllers/course.controller';
import { CourseRepository } from '../../infrastructure/repositories/course.repository';
import { ModuleRepository } from '../../infrastructure/repositories/module.repository';
import { LessonRepository } from '../../infrastructure/repositories/lesson.repository';
import { courseSchema } from '@/domain/models/course.model';
import { moduleSchema } from '../../domain/models/module.schema';
import { lessonSchema } from '../../domain/models/lesson.model';
import { CreateCourseUseCase } from '../../application/use-case/course/create-course.use-case';
import { UpdateCourseUseCase } from '../../application/use-case/course/update-course-use.case';
import { DeleteCourseUseCase } from '../../application/use-case/course/delete-course-use.case';
import { AddModuleToCourseUseCase } from '../../application/use-case/course/add-module.use-case';
import { AddLessonToModuleUseCase } from '../../application/use-case/course/add-lesson.use-case';
import { DeleteModuleUseCase } from '../../application/use-case/course/delete-module.use-case';
import { DeleteLessonUseCase } from '../../application/use-case/course/delete-lesson.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Course', schema: courseSchema },
      { name: 'Module', schema: moduleSchema },
      { name: 'Lesson', schema: lessonSchema },
    ]),
  ],
  controllers: [CourseController],
  providers: [
    CourseRepository,
    ModuleRepository,
    LessonRepository,
    CreateCourseUseCase,
    UpdateCourseUseCase,
    DeleteCourseUseCase,
    AddModuleToCourseUseCase,
    AddLessonToModuleUseCase,
    DeleteModuleUseCase,
    DeleteLessonUseCase,
  ],
})
export class CourseModule {}
