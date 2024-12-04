import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCourseUseCase } from '../../application/use-case/course/create-course.use-case';
import { CreateCourseDto } from '../../application/dtos/create.course.dto';

@ApiTags('courses') // Categoría de Swagger
@Controller('courses')
export class CourseController {
  constructor(private readonly createCourseUseCase: CreateCourseUseCase) {}

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
}
