import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LessonDto {
  @ApiProperty({
    description: 'Título de la lección',
    example: 'Introducción a NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Contenido de la lección',
    example: 'En esta lección aprenderemos los fundamentos de NestJS.',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'URL del video de la lección',
    example: 'https://example.com/video.mp4',
  })
  @IsString()
  @IsOptional()
  videoUrl?: string;
}
