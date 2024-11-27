// src/interface/controllers/course.controller.ts
import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { CreateCourseUseCase } from '../../application/use-case/course/create-course.use-case';
import { UpdateCourseUseCase } from '../../application/use-case/course/update-course-use.case';
import { DeleteCourseUseCase } from '../../application/use-case/course/delete-course-use.case';
import { AddModuleToCourseUseCase } from '../../application/use-case/course/add-module.use-case';
import { AddLessonToModuleUseCase } from '../../application/use-case/course/add-lesson.use-case';
import { DeleteModuleUseCase } from '../../application/use-case/course/delete-module.use-case';
import { DeleteLessonUseCase } from '../../application/use-case/course/delete-lesson.use-case';
import { CreateCourseDto } from '../../application/dtos/create.course.dto';
import { UpdateCourseDto } from '../../application/dtos/update-course.dto';
import { CreateModuleDto } from '../../application/dtos/create-module.dto';
import { CreateLessonDto } from '../../application/dtos/create-lesson.dto';

@Controller('courses')
export class CourseController {
  constructor(
    private readonly createCourseUseCase: CreateCourseUseCase,
    private readonly updateCourseUseCase: UpdateCourseUseCase,
    private readonly deleteCourseUseCase: DeleteCourseUseCase,
    private readonly AddModuleToCourseUseCase: AddModuleToCourseUseCase,
    private readonly AddLessonToModuleUseCase: AddLessonToModuleUseCase,
    private readonly deleteModuleUseCase: DeleteModuleUseCase,
    private readonly deleteLessonUseCase: DeleteLessonUseCase,
  ) {}

  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    return this.createCourseUseCase.execute(createCourseDto);
  }

  @Put(':id')
  async updateCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    const updatedCourse = await this.updateCourseUseCase.execute(
      id,
      updateCourseDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso no encontrado');
    }
    return updatedCourse;
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    const deleted = await this.deleteCourseUseCase.execute(id);
    if (!deleted) {
      throw new NotFoundException('Curso no encontrado');
    }
    return { message: 'Curso eliminado con éxito' };
  }

  // Agregar un módulo al curso
  @Post(':id/modules')
  async addModule(
    @Param('id') courseId: string,
    @Body() createModuleDto: CreateModuleDto,
  ) {
    const updatedCourse = await this.AddModuleToCourseUseCase.execute(
      courseId,
      createModuleDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso no encontrado');
    }
    return updatedCourse;
  }

  // Agregar una lección a un módulo
  @Post(':courseId/modules/:moduleId/lessons')
  async addLesson(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Body() createLessonDto: CreateLessonDto,
  ) {
    const updatedCourse = await this.AddLessonToModuleUseCase.execute(
      courseId,
      moduleId,
      createLessonDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso o módulo no encontrado');
    }
    return updatedCourse;
  }

  // Eliminar un módulo de un curso
  @Delete(':courseId/modules/:moduleId')
  async deleteModule(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
  ) {
    const updatedCourse = await this.deleteModuleUseCase.execute(
      courseId,
      moduleId,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso o módulo no encontrado');
    }
    return updatedCourse;
  }

  // Eliminar una lección de un módulo
  @Delete(':courseId/modules/:moduleId/lessons/:lessonId')
  @HttpCode(204)
  async deleteLesson(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Param('lessonId') lessonId: string,
  ) {
    const updatedCourse = await this.deleteLessonUseCase.execute(
      courseId,
      moduleId,
      lessonId,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso, módulo o lección no encontrado');
    }
    return;
  }
}
