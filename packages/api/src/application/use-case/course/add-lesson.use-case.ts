// src/application/use-case/course/add-lesson.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { ILesson } from '../../../domain/models/course.model';

@Injectable()
export class AddLessonToModuleUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(
    courseId: string,
    moduleId: string,
    lessonData: Partial<ILesson>,
  ) {
    const updatedCourse = await this.courseRepository.addLesson(
      courseId,
      moduleId,
      lessonData,
    );
    if (!updatedCourse) {
      throw new NotFoundException(
        `Course with ID ${courseId} or Module with ID ${moduleId} not found`,
      );
    }
    return updatedCourse;
  }
}
