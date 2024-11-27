// src/application/use-case/course/add-module.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { IModule } from '../../../domain/models/course.model';

@Injectable()
export class AddModuleToCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(courseId: string, moduleData: Partial<IModule>) {
    const updatedCourse = await this.courseRepository.addModule(
      courseId,
      moduleData,
    );
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }
    return updatedCourse;
  }
}
