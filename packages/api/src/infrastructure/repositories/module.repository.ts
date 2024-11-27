import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IModule } from '../../domain/models/module.schema';

@Injectable()
export class ModuleRepository {
  constructor(
    @InjectModel('Module') private readonly moduleModel: Model<IModule>,
  ) {}

  async create(module: Partial<IModule>): Promise<IModule> {
    return new this.moduleModel(module).save();
  }

  async update(
    id: string,
    updateData: Partial<IModule>,
  ): Promise<IModule | null> {
    return this.moduleModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async addLesson(moduleId: string, lessonId: string): Promise<IModule | null> {
    return this.moduleModel.findByIdAndUpdate(
      moduleId,
      { $push: { lessons: lessonId } },
      { new: true },
    );
  }
}
