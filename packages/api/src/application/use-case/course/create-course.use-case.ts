import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { CreateCourseDto } from '../../dtos/create.course.dto';
import { CourseEntity } from '../../../domain/entities/course.entity';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { LessonEntity } from '../../../domain/entities/lesson.entity';

@Injectable()
export class CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
    // Mapear los módulos y lecciones desde el DTO hacia entidades
    const modules = createCourseDto.modules.map(
      (module) =>
        new ModuleEntity(
          module.title,
          module.description,
          module.lessons.map(
            (lesson) =>
              new LessonEntity(
                lesson.title,
                lesson.content,
                undefined, // El `_id` se generará automáticamente
                lesson.videoUrl,
              ),
          ),
        ),
    );

    // Crear la instancia de CourseEntity
    const courseEntity = new CourseEntity(
      createCourseDto.title,
      createCourseDto.description,
      createCourseDto.creatorId,
      modules,
      createCourseDto.price,
      createCourseDto.duration,
      createCourseDto.imageUrl,
      createCourseDto.tags,
      createCourseDto.isPublished,
      createCourseDto.competencyLevel,
      createCourseDto.platform,
      createCourseDto.language,
      createCourseDto.functionalities,
      createCourseDto.tools,
      new Date(), // createdAt
      new Date(), // updatedAt
    );

    // Guardar la entidad en el repositorio
    return this.courseRepository.create(courseEntity);
  }
}
