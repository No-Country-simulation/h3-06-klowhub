import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { UpdateCourseDto } from '../../dtos/update-course.dto';

@Injectable()
export class UpdateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.update(id, updateCourseDto);
  }
}
