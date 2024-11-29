import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateLessonDto {
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

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty({ message: 'El título del módulo es obligatorio' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLessonDto)
  @ArrayMinSize(1, { message: 'El módulo debe contener al menos una lección' })
  lessons: CreateLessonDto[];
}
