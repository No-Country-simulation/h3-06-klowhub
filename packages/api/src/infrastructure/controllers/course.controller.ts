import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  HttpCode,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
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

@ApiTags('courses') // Categoría de Swagger
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
  @ApiOperation({ summary: 'Crear un nuevo curso' })
  @ApiResponse({ status: 201, description: 'Curso creado con éxito.' })
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.createCourseUseCase.execute(createCourseDto);
    return {
      status: 'success',
      message: 'Curso creado con éxito',
      data: course,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un curso existente' })
  @ApiParam({ name: 'id', description: 'ID del curso a actualizar' })
  @ApiResponse({ status: 200, description: 'Curso actualizado con éxito.' })
  @ApiResponse({ status: 404, description: 'Curso no encontrado.' })
  async updateCourse(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    const updatedCourse = await this.updateCourseUseCase.execute(
      id,
      updateCourseDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso no encontrado');
    }
    return {
      status: 'success',
      message: 'Curso actualizado con éxito',
      data: updatedCourse,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Eliminar un curso' })
  @ApiParam({ name: 'id', description: 'ID del curso a eliminar' })
  async deleteCourse(@Param('id', ParseUUIDPipe) id: string) {
    await this.deleteCourseUseCase.execute(id);
    return; // Código 204 no requiere respuesta
  }

  @Post(':id/modules')
  @ApiOperation({ summary: 'Añadir un módulo a un curso' })
  @ApiParam({ name: 'id', description: 'ID del curso' })
  async addModule(
    @Param('id', ParseUUIDPipe) courseId: string,
    @Body() createModuleDto: CreateModuleDto,
  ) {
    const updatedCourse = await this.addModuleToCourseUseCase.execute(
      courseId,
      createModuleDto,
    );
    if (!updatedCourse) {
      throw new NotFoundException('Curso no encontrado');
    }

    const newModule = updatedCourse.modules[updatedCourse.modules.length - 1];
    return {
      status: 'success',
      message: 'Módulo añadido con éxito',
      data: newModule,
    };
  }

  @Post(':courseId/modules/:moduleId/lessons')
  @ApiOperation({ summary: 'Añadir una lección a un módulo' })
  @ApiParam({ name: 'courseId', description: 'ID del curso' })
  @ApiParam({ name: 'moduleId', description: 'ID del módulo' })
  async addLesson(
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Param('moduleId', ParseUUIDPipe) moduleId: string,
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
    return {
      status: 'success',
      message: 'Lección añadida con éxito',
      data: updatedCourse,
    };
  }

  @Delete(':courseId/modules/:moduleId/lessons/:lessonId')
  @HttpCode(204)
  @ApiOperation({ summary: 'Eliminar una lección de un módulo' })
  @ApiParam({ name: 'courseId', description: 'ID del curso' })
  @ApiParam({ name: 'moduleId', description: 'ID del módulo' })
  @ApiParam({ name: 'lessonId', description: 'ID de la lección' })
  async deleteLesson(
    @Param('courseId', ParseUUIDPipe) courseId: string,
    @Param('moduleId', ParseUUIDPipe) moduleId: string,
    @Param('lessonId', ParseUUIDPipe) lessonId: string,
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
