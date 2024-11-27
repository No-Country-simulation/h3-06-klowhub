// src/application/dtos/create-lesson.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty({ message: 'El título de la lección es obligatorio' })
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  videoUrl?: string;
}
