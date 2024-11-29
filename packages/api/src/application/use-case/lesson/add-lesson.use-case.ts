import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { ILesson } from '@shared/types/ILesson';
import { LessonEntity } from '../../../domain/entities/lesson.entity';

@Injectable()
export class AddLessonToModuleUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(
    courseId: string,
    moduleId: string,
    lessonData: Partial<ILesson>,
  ) {
    if (!lessonData.title) {
      throw new Error('Lesson title is required');
    }

    if (lessonData.videoUrl && !this.isValidUrl(lessonData.videoUrl)) {
      throw new Error('Invalid video URL');
    }

    const lessonEntity = new LessonEntity(
      lessonData.title,
      lessonData.content ?? '',
      lessonData._id,
      lessonData.videoUrl,
    );

    const updatedCourse = await this.courseRepository.addLesson(
      courseId,
      moduleId,
      lessonEntity,
    );

    if (!updatedCourse) {
      throw new NotFoundException(
        `Course with ID ${courseId} or Module with ID ${moduleId} not found`,
      );
    }

    return updatedCourse;
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}
