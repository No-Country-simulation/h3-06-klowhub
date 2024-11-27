// src/application/use-case/course/delete-module.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';

@Injectable()
export class DeleteModuleUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(courseId: string, moduleId: string) {
    const updatedCourse = await this.courseRepository.deleteModule(
      courseId,
      moduleId,
    );
    if (!updatedCourse) {
      throw new NotFoundException(
        `Course with ID ${courseId} or Module with ID ${moduleId} not found`,
      );
    }
    return updatedCourse;
  }
}
