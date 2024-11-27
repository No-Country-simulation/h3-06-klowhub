// src/infrastructure/repositories/lesson.repository.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ILesson } from '../../domain/models/lesson.model';

@Injectable()
export class LessonRepository {
  constructor(
    @InjectModel('Lesson') private readonly lessonModel: Model<ILesson>,
  ) {}

  async create(lesson: Partial<ILesson>): Promise<ILesson> {
    return new this.lessonModel(lesson).save();
  }

  async findById(id: string): Promise<ILesson | null> {
    return this.lessonModel.findById(id).exec();
  }

  async findAll(): Promise<ILesson[]> {
    return this.lessonModel.find().exec();
  }

  async update(
    id: string,
    updateData: Partial<ILesson>,
  ): Promise<ILesson | null> {
    return this.lessonModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<{ acknowledged: boolean } | null> {
    return this.lessonModel.deleteOne({ _id: id }).exec();
  }
}
