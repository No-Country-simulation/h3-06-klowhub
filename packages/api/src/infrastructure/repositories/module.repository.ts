import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ModuleEntity } from '../../domain/entities/module.entity';
import { LessonEntity } from '../../domain/entities/lesson.entity';
@Injectable()
export class ModuleRepository {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<any>, // Asegúrate de que el modelo 'Course' tiene un campo `modules`.
  ) {}

  async createModule(
    courseId: string,
    module: ModuleEntity,
  ): Promise<ModuleEntity> {
    // Buscar el curso
    const course = await this.courseModel.findById(courseId);
    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    // Crear el nuevo módulo
    const newModule = {
      title: module.title,
      description: module.description,
      lessons: module.lessons.map((lesson) => ({
        title: lesson.title,
        content: lesson.content,
        videoUrl: lesson.videoUrl,
      })),
    };

    // Agregar el módulo al curso
    course.modules.push(newModule);
    await course.save();

    // Recuperar el módulo recién añadido con su `_id`
    const savedModule = course.modules[course.modules.length - 1];

    return new ModuleEntity(
      savedModule.title,
      savedModule.description,
      savedModule.lessons,
      savedModule._id,
    );
  }
  async addLesson(
    courseId: string,
    moduleId: string,
    lessonEntity: LessonEntity,
  ): Promise<void> {
    // Convertir LessonEntity a objeto plano
    const lessonData = {
      title: lessonEntity.title,
      content: lessonEntity.content,
      videoUrl: lessonEntity.videoUrl,
    };

    // Actualizar el módulo con la nueva lección
    const result = await this.courseModel.updateOne(
      { _id: courseId, 'modules._id': moduleId },
      { $push: { 'modules.$.lessons': lessonData } },
    );

    // Verificar si algún documento fue modificado
    if (result.modifiedCount === 0) {
      throw new Error(
        'No se encontró el curso o el módulo para agregar la lección.',
      );
    }
  }
}
