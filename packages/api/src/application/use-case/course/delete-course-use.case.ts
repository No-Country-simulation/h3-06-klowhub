import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';

@Injectable()
export class DeleteCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(id: string): Promise<void> {
    // Verificar si el curso existe antes de intentar eliminarlo
    const existingCourse = await this.courseRepository.findById(id);

    if (!existingCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    // Intentar eliminar el curso
    const result = await this.courseRepository.delete(id);

    if (!result.acknowledged) {
      throw new InternalServerErrorException('Failed to delete the course');
    }
  }
}
