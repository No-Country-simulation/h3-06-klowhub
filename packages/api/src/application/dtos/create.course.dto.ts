import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  @IsString() // Si estás seguro de que será un ObjectId, utiliza @IsMongoId
  @IsMongoId({ message: 'Debe ser un ObjectId válido' })
  @IsNotEmpty()
  creatorId: string;
}
