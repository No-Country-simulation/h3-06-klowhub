import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { LessonDto } from './create-lesson.dto';

export class ModuleDto {
  @ApiProperty({
    description: 'Título del módulo',
    example: 'Fundamentos de NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Descripción del módulo',
    example: 'Este módulo cubre los fundamentos de NestJS.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Lecciones del módulo',
    type: [LessonDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LessonDto)
  lessons: LessonDto[];
}
