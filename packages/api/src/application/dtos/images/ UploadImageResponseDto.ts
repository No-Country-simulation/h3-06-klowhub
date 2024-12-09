import { ApiProperty } from '@nestjs/swagger';

export class UploadImageResponseDto {
  @ApiProperty({
    description: 'URL de la imagen subida a Cloudinary',
    example: 'https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg',
  })
  imageUrl: string;
}
