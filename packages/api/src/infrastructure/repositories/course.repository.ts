// src/infrastructure/repositories/course.repository.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICourse, IModule, ILesson } from '../../domain/models/course.model';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<ICourse>,
  ) {}

  // Crear un nuevo curso
  async create(course: Partial<ICourse>): Promise<ICourse> {
    return new this.courseModel(course).save();
  }

  // Actualizar información de un curso
  async update(
    id: string,
    updateData: Partial<ICourse>,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  // Eliminar un curso
  async delete(id: string): Promise<{ acknowledged: boolean } | null> {
    return this.courseModel.deleteOne({ _id: id }).exec();
  }

  // Agregar un módulo a un curso
  async addModule(
    courseId: string,
    moduleData: Partial<IModule>,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findByIdAndUpdate(
        courseId,
        { $push: { modules: moduleData } },
        { new: true },
      )
      .exec();
  }

  // Agregar una lección a un módulo de un curso
  async addLesson(
    courseId: string,
    moduleId: string,
    lessonData: Partial<ILesson>,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findOneAndUpdate(
        { _id: courseId, 'modules._id': moduleId },
        { $push: { 'modules.$.lessons': lessonData } },
        { new: true },
      )
      .exec();
  }

  // Actualizar un módulo en un curso
  async updateModule(
    courseId: string,
    moduleId: string,
    updateData: Partial<IModule>,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findOneAndUpdate(
        { _id: courseId, 'modules._id': moduleId },
        { $set: { 'modules.$': updateData } },
        { new: true },
      )
      .exec();
  }

  // Actualizar una lección en un módulo de un curso
  async updateLesson(
    courseId: string,
    moduleId: string,
    lessonId: string,
    updateData: Partial<ILesson>,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findOneAndUpdate(
        {
          _id: courseId,
          'modules._id': moduleId,
          'modules.lessons._id': lessonId,
        },
        { $set: { 'modules.$.lessons.$[lesson]': updateData } },
        {
          new: true,
          arrayFilters: [{ 'lesson._id': lessonId }],
        },
      )
      .exec();
  }

  // Eliminar un módulo de un curso
  async deleteModule(
    courseId: string,
    moduleId: string,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findByIdAndUpdate(
        courseId,
        { $pull: { modules: { _id: moduleId } } },
        { new: true },
      )
      .exec();
  }

  // Eliminar una lección de un módulo de un curso
  async deleteLesson(
    courseId: string,
    moduleId: string,
    lessonId: string,
  ): Promise<ICourse | null> {
    return this.courseModel
      .findOneAndUpdate(
        { _id: courseId, 'modules._id': moduleId },
        { $pull: { 'modules.$.lessons': { _id: lessonId } } },
        { new: true },
      )
      .exec();
  }
}
