import {
  Controller,
  Post,
  Body,
  Param,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { CreateCourseUseCase } from '../../application/use-case/course/create-course.use-case';
import { AddModuleUseCase } from '../../application/use-case/modules/add-module.use-case';
import { AddLessonUseCase } from '../../application/use-case/lesson/add-lesson.use-case';
import { CreateCourseDto } from '../../application/dtos/create.course.dto';
import { ModuleDto } from '../../application/dtos/create-module.dto';
import { ILesson } from '@shared/types/ICourse';
import { DeleteCourseUseCase } from '@/application/use-case/course/delete-course-use.case';
import { UpdateCourseUseCase } from '@/application/use-case/course/update-course-use.case';
import { UpdateCourseDto } from '@/application/dtos/update-course.dto';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(
    private readonly createCourseUseCase: CreateCourseUseCase,
    private readonly updateCourseUseCase: UpdateCourseUseCase,
    private readonly deleteCourseUseCase: DeleteCourseUseCase,
    private readonly addModuleUseCase: AddModuleUseCase,
    private readonly addLessonUseCase: AddLessonUseCase,
  ) {}

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

  @Put(':courseId')
  @HttpCode(200)
  @ApiOperation({ summary: 'Actualizar un curso existente' })
  @ApiResponse({
    status: 200,
    description: 'Curso actualizado con éxito.',
    schema: {
      example: {
        status: 'success',
        message: 'Curso actualizado con éxito',
        
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Curso no encontrado.',
    schema: {
      example: {
        status: 'error',
        message: 'Curso no encontrado',
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
  @ApiInternalServerErrorResponse({
    description: 'Error interno del servidor.',
    schema: {
      example: {
        status: 'error',
        message: 'No se pudo actualizar el curso',
        details: 'Ocurrió un error desconocido.',
      },
    },
  })
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    try {
      const updatedCourse = await this.updateCourseUseCase.execute(
        courseId,
        updateCourseDto,
      );
      return {
        status: 'success',
        message: 'Curso actualizado con éxito',
        data: updatedCourse,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(
          {
            status: 'error',
            message: `Curso con ID ${courseId} no encontrado`,
          },
          HttpStatus.NOT_FOUND,
        );
      }

      if (error instanceof Error) {
        throw new HttpException(
          {
            status: 'error',
            message: 'No se pudo actualizar el curso',
            details: error.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        {
          status: 'error',
          message: 'No se pudo actualizar el curso',
          details: 'Ocurrió un error desconocido',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  
    @Delete(':courseId')
    @HttpCode(204)
    @ApiOperation({ summary: 'Eliminar un curso existente' })
    @ApiResponse({
      status: 204,
      description: 'Curso eliminado con éxito.',
    })
    @ApiNotFoundResponse({
      description: 'Curso no encontrado.',
      schema: {
        example: {
          status: 'error',
          message: 'Curso no encontrado',
        },
      },
    })
    @ApiInternalServerErrorResponse({
      description: 'Error interno del servidor.',
      schema: {
        example: {
          status: 'error',
          message: 'No se pudo eliminar el curso',
          details: 'Error desconocido.',
        },
      },
    })
    async deleteCourse(@Param('courseId') courseId: string) {
      try {
        await this.deleteCourseUseCase.execute(courseId);
      } catch (error) {
        if (error instanceof NotFoundException) {
          throw new HttpException(
            {
              status: 'error',
              message: `Curso con ID ${courseId} no encontrado`,
            },
            HttpStatus.NOT_FOUND,
          );
        }
  
        throw new HttpException(
          {
            status: 'error',
            message: 'No se pudo eliminar el curso',
            details: error || 'Ocurrió un error desconocido',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  

  @Post(':courseId/modules')
  @HttpCode(201)
  @ApiOperation({ summary: 'Agregar un módulo a un curso existente' })
  @ApiResponse({
    status: 201,
    description: 'Módulo agregado con éxito.',
    schema: {
      example: {
        status: 'success',
        message: 'Módulo agregado con éxito',
        data: {
          id: '60d0fe4f5311236168a109cb',
          title: 'Módulo 1: Introducción',
          description: 'Descripción del módulo',
        },
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Curso no encontrado.',
    schema: {
      example: {
        status: 'error',
        message: 'Curso no encontrado',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Error en la validación de datos del módulo.',
    schema: {
      example: {
        status: 'error',
        message: 'Datos inválidos',
        errors: [
          { field: 'title', message: 'El título del módulo es obligatorio' },
        ],
      },
    },
  })
  async addModule(
    @Param('courseId') courseId: string,
    @Body() ModuleDto: ModuleDto,
  ) {
    try {
      const module = await this.addModuleUseCase.execute(courseId, ModuleDto);
      return {
        status: 'success',
        message: 'Módulo agregado con éxito',
        data: module,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            status: 'error',
            message: 'No se pudo agregar el módulo',
            details: error.message,
          },
          error instanceof NotFoundException
            ? HttpStatus.NOT_FOUND
            : HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        {
          status: 'error',
          message: 'No se pudo agregar el módulo',
          details: 'Ocurrió un error desconocido',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Post(':courseId/modules/:moduleId/lessons')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Agregar una lección a un módulo existente' })
  @ApiResponse({
    status: 201,
    description: 'Lección agregada con éxito.',
    schema: {
      example: {
        status: 'success',
        message: 'Lección agregada con éxito',
        data: {
          id: '60d0fe4f5311236168a109cc',
          title: 'Introducción a NestJS',
          content: 'Esta es la primera lección.',
          videoUrl: 'http://example.com/video.mp4',
        },
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Curso o módulo no encontrado.',
    schema: {
      example: {
        status: 'error',
        message: 'Curso o módulo no encontrado',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Error en la validación de datos de la lección.',
    schema: {
      example: {
        status: 'error',
        message: 'Datos inválidos',
        errors: [
          { field: 'title', message: 'El título de la lección es obligatorio' },
        ],
      },
    },
  })
  async addLesson(
    @Param('courseId') courseId: string,
    @Param('moduleId') moduleId: string,
    @Body() lessonData: Omit<ILesson, '_id'>, // Datos de la nueva lección
  ) {
    try {
      const lesson = await this.addLessonUseCase.execute(
        courseId,
        moduleId,
        lessonData,
      );
      return {
        status: 'success',
        message: 'Lección agregada con éxito',
        data: lesson,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            status: 'error',
            message: 'No se pudo agregar la lección',
            details: error.message,
          },
          error instanceof NotFoundException
            ? HttpStatus.NOT_FOUND
            : HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        {
          status: 'error',
          message: 'No se pudo agregar la lección',
          details: 'Ocurrió un error desconocido',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
