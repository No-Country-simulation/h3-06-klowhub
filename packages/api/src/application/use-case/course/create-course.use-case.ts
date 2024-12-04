import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { CreateCourseDto } from '../../dtos/create.course.dto';
import { CourseEntity } from '../../../domain/entities/course.entity';

@Injectable()
export class CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
    // Crear la entidad desde el DTO
    const courseEntity = new CourseEntity(
      createCourseDto.title,
      createCourseDto.description,
      createCourseDto.creatorId,
      [], // Módulos iniciales vacíos
      createCourseDto.price,
      createCourseDto.duration, // Este campo debe estar en el constructor
      createCourseDto.level,
      createCourseDto.imageUrl,
      createCourseDto.tags,
      createCourseDto.isPublished,
      new Date(), // createdAt
      new Date(), // updatedAt
    );

    // Delegar la creación al repositorio
    return this.courseRepository.create(courseEntity);
  }
}
