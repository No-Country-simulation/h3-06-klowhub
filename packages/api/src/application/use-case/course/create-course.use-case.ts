// src/application/use-case/create-course.use-case.ts
import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../../infrastructure/repositories/course.repository';
import { CreateCourseDto } from '../../dtos/create.course.dto';
import { ICourse } from '../../../domain/models/course.model';
import { Types } from 'mongoose';

@Injectable()
export class CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(createCourseDto: CreateCourseDto): Promise<ICourse> {
    const courseData = {
      ...createCourseDto,
      creatorId: new Types.ObjectId(createCourseDto.creatorId), // Convertimos creatorId
    };
    return this.courseRepository.create(courseData);
  }
}
