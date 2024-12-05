import { Injectable } from '@nestjs/common';
import { LessonEntity } from '../../../domain/entities/lesson.entity';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { ModuleRepository } from '../../../infrastructure/repositories/module.repository';

@Injectable()
export class AddLessonUseCase {
  constructor(
    private readonly courseRepository: CourseRepository,
    private readonly moduleRepository: ModuleRepository,
  ) {}

  async execute(
    courseId: string,
    moduleId: string,
    lessonData: Partial<LessonEntity>,
  ): Promise<LessonEntity> {
    const course = await this.courseRepository.findById(courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    // Validar si el módulo existe dentro del curso
    const module = course.modules.find((mod) => mod._id === moduleId);
    if (!module) {
      throw new Error('Module not found');
    }

    // Crear la nueva lección
    const newLesson = new LessonEntity(
      lessonData.title,
      lessonData.content,
      lessonData.videoUrl,
    );

    // Agregar la lección al módulo
    module.lessons.push(newLesson);

    // Actualizar el curso en el repositorio
    await this.moduleRepository.addLesson(courseId, moduleId, newLesson);

    return newLesson;
  }
}
