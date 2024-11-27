import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString() // Si es un ObjectId, podría ser @IsMongoId()
  @IsNotEmpty()
  creatorId: string;
}
