import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { ILesson } from '@shared/types/ILesson';
import { LessonEntity } from '../../../domain/entities/lesson.entity';

@Injectable()
export class AddLessonToModuleUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(
    courseId: string,
    moduleId: string,
    lessonData: Partial<ILesson>,
  ) {
    // Validar que los datos necesarios estén presentes
    if (!lessonData.title) {
      throw new Error('Lesson title is required');
    }

    // Transformar lessonData en una instancia de LessonEntity
    const lessonEntity = new LessonEntity(
      lessonData.title,
      lessonData.content ?? '', // Usar valor por defecto si es opcional
      lessonData._id, // Si hay un ID, pásalo; si no, queda undefined
    );

    // Llamar al repositorio para agregar la lección
    const updatedCourse = await this.courseRepository.addLesson(
      courseId,
      moduleId,
      lessonEntity,
    );

    if (!updatedCourse) {
      throw new NotFoundException(
        `Course with ID ${courseId} or Module with ID ${moduleId} not found`,
      );
    }

    return updatedCourse;
  }
}
