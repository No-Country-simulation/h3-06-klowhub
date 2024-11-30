import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from '@shared/types/ICourse';
import { CourseEntity } from '../../domain/entities/course.entity';
import { ModuleEntity } from '../../domain/entities/module.entity';
import { LessonEntity } from '../../domain/entities/lesson.entity';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<ICourse>,
  ) {}

  // Crear curso a partir de una entidad
  async create(courseEntity: CourseEntity): Promise<CourseEntity> {
    const createdCourse = new this.courseModel({
      title: courseEntity.title,
      description: courseEntity.description,
      creatorId: courseEntity.creatorId,
      modules: courseEntity.modules.map((module) => ({
        title: module.title,
        description: module.description,
        lessons: module.lessons.map((lesson) => ({
          title: lesson.title,
          content: lesson.content,
        })),
      })),
    });
    const savedCourse = await createdCourse.save();
    return this.toEntity(savedCourse);
  }
  //Borrar por ID
  async delete(id: string): Promise<{ acknowledged: boolean }> {
    return this.courseModel.deleteOne({ _id: id }).exec();
  }
  // Buscar curso por ID y devolver como entidad
  async findById(courseId: string): Promise<CourseEntity | null> {
    const course = await this.courseModel.findById(courseId).exec();
    return course ? this.toEntity(course) : null;
  }

  // Actualizar curso
  async update(courseEntity: CourseEntity): Promise<CourseEntity> {
    const updatedCourse = await this.courseModel
      .findByIdAndUpdate(courseEntity._id, courseEntity, { new: true })
      .exec();
    if (!updatedCourse) {
      throw new Error('No se pudo actualizar el curso.');
    }
    return this.toEntity(updatedCourse);
  }

  // Agregar un módulo a un curso
  async addModule(
    courseId: string,
    moduleEntity: ModuleEntity,
  ): Promise<CourseEntity | null> {
    const updatedCourse = await this.courseModel
      .findByIdAndUpdate(
        courseId,
        { $push: { modules: moduleEntity } },
        { new: true },
      )
      .exec();
    return updatedCourse ? this.toEntity(updatedCourse) : null;
  }

  // Agregar una lección a un módulo
  async addLesson(
    courseId: string,
    moduleId: string,
    lessonEntity: LessonEntity,
  ): Promise<CourseEntity | null> {
    const updatedCourse = await this.courseModel
      .findOneAndUpdate(
        { _id: courseId, 'modules._id': moduleId },
        { $push: { 'modules.$.lessons': lessonEntity } },
        { new: true },
      )
      .exec();
    return updatedCourse ? this.toEntity(updatedCourse) : null;
  }
  async deleteLesson(
    courseId: string,
    moduleId: string,
    lessonId: string,
  ): Promise<CourseEntity | null> {
    const updatedCourse = await this.courseModel
      .findOneAndUpdate(
        { _id: courseId, 'modules._id': moduleId },
        { $pull: { 'modules.$.lessons': { _id: lessonId } } },
        { new: true },
      )
      .exec();

    return updatedCourse ? this.toEntity(updatedCourse) : null;
  }

  // Conversión de modelo a entidad
  private toEntity(course: ICourse): CourseEntity {
    const modules = course.modules.map(
      (module) =>
        new ModuleEntity(
          module.title,
          module.description,
          module.lessons.map(
            (lesson) =>
              new LessonEntity(
                lesson.title,
                lesson.content,
                lesson._id?.toString(),
              ),
          ),
          module._id?.toString(),
        ),
    );

    return new CourseEntity(
      course.title,
      course.description,
      course.creatorId,
      modules,
      course._id?.toString(),
    );
  }
}
