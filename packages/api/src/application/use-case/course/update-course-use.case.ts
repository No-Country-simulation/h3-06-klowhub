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
  updateCourseDto.modules || existingCourse.modules, // Si los módulos se pueden actualizar
  updateCourseDto.price || existingCourse.price, // Precio
  updateCourseDto.duration || existingCourse.duration, // Duración
  updateCourseDto.imageUrl || existingCourse.imageUrl, // URL de la imagen
  updateCourseDto.tags || existingCourse.tags, // Etiquetas
  updateCourseDto.isPublished ?? existingCourse.isPublished, // Publicación (boolean)
  updateCourseDto.competencyLevel || existingCourse.competencyLevel, // Nivel de competencia (opcional)
  updateCourseDto.platform || existingCourse.platform, // Plataforma (opcional)
  updateCourseDto.language || existingCourse.language, // Idioma (opcional)
  updateCourseDto.functionalities || existingCourse.functionalities, // Funcionalidades (opcional)
  updateCourseDto.tools || existingCourse.tools, // Herramientas (opcional)
  existingCourse.createdAt, // Fecha de creación (mantiene la original)
  new Date(), // Fecha de actualización (actualizada)
  existingCourse._id, // ID existente
    );

    // Actualizamos el curso en el repositorio
    return this.courseRepository.update(id, updatedCourseEntity);
  }
}
