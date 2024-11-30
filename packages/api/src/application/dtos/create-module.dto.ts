import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CreateLessonDto {
  @ApiProperty({
    description: 'El título de la lección',
    example: 'Introducción a TypeScript',
  })
  @IsString()
  @IsNotEmpty({ message: 'El título de la lección es obligatorio' })
  title: string;

  @ApiPropertyOptional({
    description: 'El contenido de la lección (opcional)',
    example: 'Este es el contenido de la lección...',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'La URL del video de la lección (opcional)',
    example: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  })
  @IsString()
  @IsOptional()
  videoUrl?: string;
}

export class CreateModuleDto {
  @ApiProperty({
    description: 'El título del módulo',
    example: 'Módulo 1: Fundamentos de Programación',
  })
  @IsString()
  @IsNotEmpty({ message: 'El título del módulo es obligatorio' })
  title: string;

  @ApiPropertyOptional({
    description: 'La descripción del módulo (opcional)',
    example: 'Este módulo cubre los fundamentos básicos de programación.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Lista de lecciones del módulo',
    type: [CreateLessonDto], // Indica que es un array de objetos de tipo CreateLessonDto
    example: [
      {
        title: 'Introducción a JavaScript',
        content:
          'En esta lección, aprenderás los conceptos básicos de JavaScript.',
        videoUrl: 'https://www.youtube.com/watch?v=abc123',
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLessonDto)
  @ArrayMinSize(1, { message: 'El módulo debe contener al menos una lección' })
  lessons: CreateLessonDto[];
}
