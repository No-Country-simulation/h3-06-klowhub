import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { ModuleDto } from './create-module.dto';
import { Type } from 'class-transformer';
export class CreateCourseDto {
  @ApiProperty({
    description: 'El título del curso',
    example: 'Curso de Desarrollo Web con NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'La descripción del curso',
    example: 'Este curso cubre los conceptos básicos y avanzados de NestJS.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'El ID del creador del curso',
    example: '60d0fe4f5311236168a109ca',
  })
  @IsString()
  @IsMongoId({ message: 'Debe ser un ObjectId válido' })
  @IsNotEmpty()
  creatorId: string;

  @ApiProperty({
    description: 'Nivel de competencia del curso',
    example: 'Intermedio',
  })
  @IsString()
  @IsNotEmpty()
  competencyLevel: string;

  @ApiProperty({
    description: 'Plataforma utilizada en el curso',
    example: 'AppSheet',
  })
  @IsString()
  @IsNotEmpty()
  platform: string;

  @ApiProperty({
    description: 'Idioma en el que se imparte el curso',
    example: 'Español',
  })
  @IsString()
  @IsNotEmpty()
  language: string;

  @ApiProperty({
    description: 'Sector objetivo del curso',
    example: 'Tecnología',
  })
  @IsString()
  @IsNotEmpty()
  sector: string;

  @ApiProperty({
    description: 'Lista de funcionalidades que aborda el curso',
    example: ['Automatización', 'Creación de apps'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  functionalities: string[];

  @ApiProperty({
    description: 'Lista de herramientas y plataformas utilizadas en el curso',
    example: ['Figma', 'Postman'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  tools: string[];

  @ApiProperty({
    description: 'Indica si el curso es gratuito',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isFree: boolean;

  @ApiProperty({
    description: 'Precio del curso (si no es gratuito)',
    example: 99.99,
  })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({ description: 'Módulos del curso', type: [ModuleDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ModuleDto)
  modules: ModuleDto[];
  @ApiProperty({
    description: 'Duración del curso en horas',
    example: 20,
  })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    description: 'Nivel del curso',
    example: 'Avanzado',
  })
  @IsString()
  @IsOptional()
  level?: string;

  @ApiProperty({
    description: 'URL de la imagen del curso',
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({
    description: 'Etiquetas asociadas al curso',
    example: ['NestJS', 'Desarrollo Web', 'Backend'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    description: 'Indica si el curso está publicado',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
