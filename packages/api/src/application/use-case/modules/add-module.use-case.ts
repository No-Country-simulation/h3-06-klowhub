import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { CreateModuleDto } from '../../dtos/create-module.dto';
import { LessonEntity } from '../../../domain/entities/lesson.entity';

@Injectable()
export class AddModuleToCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(courseId: string, moduleData: CreateModuleDto) {
    // Convertir las lecciones del DTO en LessonEntity
    const lessons = moduleData.lessons.map(
      (lesson) => new LessonEntity(lesson.title, lesson.content),
    );

    // Crear una instancia de ModuleEntity
    const moduleEntity = new ModuleEntity(
      moduleData.title,
      moduleData.description,
      lessons,
    );

    // Llamar al repositorio para agregar el módulo
    const updatedCourse = await this.courseRepository.addModule(
      courseId,
      moduleEntity,
    );

    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    return updatedCourse;
  }
}
