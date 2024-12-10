import { IsString, IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LessonDto } from './create-lesson.dto';

export class ModuleDto {
  @ApiProperty({
    description: 'Título del módulo',
    example: 'Introducción a NestJS',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Descripción del módulo',
    example: 'Este módulo introduce los conceptos básicos de NestJS.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Lista de lecciones del módulo',
    example: [
      { title: 'Introducción', content: 'Bienvenida', videoUrl: 'http://...' },
    ],
  })
  @IsArray()
  @IsOptional()
  lessons?: LessonDto[];
}
