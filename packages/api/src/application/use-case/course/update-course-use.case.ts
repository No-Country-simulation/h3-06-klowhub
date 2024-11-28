import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { UpdateCourseDto } from '../../dtos/update-course.dto';
import { CourseEntity } from '../../../domain/entities/course.entity';

@Injectable()
export class UpdateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<CourseEntity> {
    // Recuperamos el curso actual desde el repositorio
    const existingCourse = await this.courseRepository.findById(id);

    if (!existingCourse) {
      throw new Error('Course not found'); // Manejo de errores
    }

    // Crear una nueva instancia de la entidad para mantener consistencia
    const updatedCourseEntity = new CourseEntity(
      updateCourseDto.title || existingCourse.title,
      updateCourseDto.description || existingCourse.description,
      existingCourse.creatorId,
      existingCourse.modules, // Mantenemos los módulos existentes
      existingCourse._id, // Pasamos el ID existente
    );

    // Actualizamos el curso en el repositorio
    return this.courseRepository.update(updatedCourseEntity);
  }
}
