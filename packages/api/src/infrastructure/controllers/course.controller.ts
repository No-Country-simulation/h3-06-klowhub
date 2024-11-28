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
import { AddModuleToCourseUseCase } from '../../application/use-case/modules/add-module.use-case';
import { AddLessonToModuleUseCase } from '../../application/use-case/lesson/add-lesson.use-case';
import { DeleteLessonFromModuleUseCase } from '../../application/use-case/modules/delete-module.use-case';
import { DeleteLessonUseCase } from '../../application/use-case/lesson/delete-lesson.use-case';
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
    private readonly addModuleToCourseUseCase: AddModuleToCourseUseCase,
    private readonly addLessonToModuleUseCase: AddLessonToModuleUseCase,
    private readonly deleteModuleUseCase: DeleteLessonFromModuleUseCase,
    private readonly deleteLessonUseCase: DeleteLessonUseCase,
  ) {}

  @Post()
  @HttpCode(201)
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.createCourseUseCase.execute(createCourseDto);
    return { message: 'Curso creado con éxito', course };
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
    return { message: 'Curso actualizado con éxito', updatedCourse };
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteCourse(@Param('id') id: string) {
    await this.deleteCourseUseCase.execute(id);
    return; // Opcional porque el código 204 no requiere respuesta
  }

  @Post(':id/modules')
  async addModule(
    @Param('id') courseId: string,
    @Body() createModuleDto: CreateModuleDto,
  ) {
    const updatedCourse = await this.addModuleToCourseUseCase.execute(
      courseId,
      createModuleDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso no encontrado');
    }
    return { message: 'Módulo añadido con éxito', updatedCourse };
  }

  @Post(':courseId/modules/:moduleId/lessons')
  async addLesson(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Body() createLessonDto: CreateLessonDto,
  ) {
    const updatedCourse = await this.addLessonToModuleUseCase.execute(
      courseId,
      moduleId,
      createLessonDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso o módulo no encontrado');
    }
    return { message: 'Lección añadida con éxito', updatedCourse };
  }

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
