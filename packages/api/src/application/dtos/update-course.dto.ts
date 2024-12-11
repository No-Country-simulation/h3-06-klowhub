import { IsOptional, IsString, IsNumber, IsBoolean, IsArray } from 'class-validator';

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  modules?: any[]; // Ajusta el tipo según corresponda si usas un DTO para los módulos.

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Cada elemento debe ser una cadena
  tags?: string[];

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsString()
  competencyLevel?: string;

  @IsOptional()
  @IsString()
  platform?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  functionalities?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tools?: string[];
}
