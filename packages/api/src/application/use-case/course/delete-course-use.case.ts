// src/application/use-case/delete-course.use-case.ts
import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';

@Injectable()
export class DeleteCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(id: string): Promise<boolean> {
    const result = await this.courseRepository.delete(id);
    return result?.acknowledged ?? false;
  }
}
