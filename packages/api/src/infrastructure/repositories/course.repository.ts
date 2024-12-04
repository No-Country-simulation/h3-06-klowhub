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

  async create(courseEntity: CourseEntity): Promise<CourseEntity> {
    const createdCourse = new this.courseModel({
      title: courseEntity.title,
      description: courseEntity.description,
      creatorId: courseEntity.creatorId,
      price: courseEntity.price,
      duration: courseEntity.duration,
      imageUrl: courseEntity.imageUrl,
      tags: courseEntity.tags,
      isPublished: courseEntity.isPublished,
      competencyLevel: courseEntity.competencyLevel,
      platform: courseEntity.platform,
      language: courseEntity.language,
      functionalities: courseEntity.functionalities,
      tools: courseEntity.tools,
      modules: courseEntity.modules.map((module) => ({
        title: module.title,
        description: module.description,
        lessons: module.lessons.map((lesson) => ({
          title: lesson.title,
          content: lesson.content,
          videoUrl: lesson.videoUrl,
        })),
      })),
      createdAt: courseEntity.createdAt,
      updatedAt: courseEntity.updatedAt,
    });

    const savedCourse = await createdCourse.save();
    return this.toEntity(savedCourse);
  }

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
                lesson.videoUrl,
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
      course.price,
      course.duration,
      course.imageUrl,
      course.tags,
      course.isPublished,
      course.competencyLevel,
      course.platform,
      course.language,
      course.functionalities,
      course.tools,
      course.createdAt,
      course.updatedAt,
      course._id?.toString(),
    );
  }
}
