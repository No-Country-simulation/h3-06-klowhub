import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty({ message: 'El título del módulo es obligatorio' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
