import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLessonDto {
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
