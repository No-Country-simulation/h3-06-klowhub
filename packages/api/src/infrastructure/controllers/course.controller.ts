import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { CreateCourseUseCase } from '../../application/use-case/course/create-course.use-case';
import { CreateCourseDto } from '../../application/dtos/create.course.dto';

@ApiTags('courses') // Categoría de Swagger
@Controller('courses')
export class CourseController {
  constructor(private readonly createCourseUseCase: CreateCourseUseCase) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Crear un nuevo curso' })
  @ApiResponse({
    status: 201,
    description: 'Curso creado con éxito.',
    schema: {
      example: {
        status: 'success',
        message: 'Curso creado con éxito',
        data: {
          id: '60d0fe4f5311236168a109ca',
          title: 'Curso de Desarrollo Web con NestJS',
          description:
            'Este curso cubre los conceptos básicos y avanzados de NestJS.',
          // Otros campos relevantes...
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Error en la validación de datos.',
    schema: {
      example: {
        status: 'error',
        message: 'Datos inválidos',
        errors: [
          { field: 'title', message: 'El título es obligatorio' },
          { field: 'price', message: 'El precio debe ser mayor a 0' },
        ],
      },
    },
  })
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    try {
      const course = await this.createCourseUseCase.execute(createCourseDto);
      return {
        status: 'success',
        message: 'Curso creado con éxito',
        data: course,
      };
    } catch (error) {
      if (error instanceof Error) {
        // El error tiene una propiedad 'message'
        throw new HttpException(
          {
            status: 'error',
            message: 'No se pudo crear el curso',
            details: error.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        {
          status: 'error',
          message: 'No se pudo crear el curso',
          details: 'Ocurrió un error desconocido',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
