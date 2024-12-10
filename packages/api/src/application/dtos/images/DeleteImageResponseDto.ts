import { ApiProperty } from '@nestjs/swagger';

export class DeleteImageResponseDto {
  @ApiProperty({
    description: 'Mensaje de confirmación al eliminar la imagen',
    example: 'Imagen eliminada exitosamente',
  })
  message: string;
}
