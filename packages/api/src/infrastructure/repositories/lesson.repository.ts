import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LessonEntity } from '../../domain/entities/lesson.entity';

@Injectable()
export class LessonRepository {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<any>,
  ) {}

  async addLessonToModule(
    courseId: string,
    moduleId: string,
    lesson: LessonEntity,
  ): Promise<LessonEntity> {
    const course = await this.courseModel.findById(courseId);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const module = course.modules.id(moduleId);
    if (!module) {
      throw new NotFoundException('Module not found');
    }

    const newLesson = {
      title: lesson.title,
      content: lesson.content,
      videoUrl: lesson.videoUrl,
    };

    module.lessons.push(newLesson);
    await course.save();

    // Retorna la lección recién añadida
    const addedLesson = module.lessons[module.lessons.length - 1];
    return new LessonEntity(
      addedLesson.title,
      addedLesson.content,
      addedLesson.videoUrl,
      addedLesson._id,
    );
  }
}
