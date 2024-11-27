// src/application/use-case/course/delete-lesson.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';

@Injectable()
export class DeleteLessonUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(courseId: string, moduleId: string, lessonId: string) {
    const updatedCourse = await this.courseRepository.deleteLesson(
      courseId,
      moduleId,
      lessonId,
    );
    if (!updatedCourse) {
      throw new NotFoundException(
        `Course with ID ${courseId}, Module with ID ${moduleId}, or Lesson with ID ${lessonId} not found`,
      );
    }
    return updatedCourse;
  }
}
