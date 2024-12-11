import { ApiProperty } from '@nestjs/swagger';

export class ImageDto {
  @ApiProperty({ description: 'ID público de la imagen en Cloudinary', example: 'sample1' })
  publicId: string;

  @ApiProperty({ description: 'URL de la imagen', example: 'https://res.cloudinary.com/demo/sample1.jpg' })
  url: string;
}

export class ListImagesResponseDto {
  @ApiProperty({ type: [ImageDto], description: 'Lista de imágenes' })
  images: ImageDto[];
}
