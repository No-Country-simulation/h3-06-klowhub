import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    Get,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiConsumes,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
  } from '@nestjs/swagger';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ImagesService } from '../utils/cloudinary.service';
  import { CloudinaryStorage } from 'multer-storage-cloudinary';
  import { v2 as cloudinary } from 'cloudinary';
  import { UploadImageResponseDto } from '@/application/dtos/images/ UploadImageResponseDto';
  import { ListImagesResponseDto } from '@/application/dtos/images/ListImagesResponseDto';
  import { DeleteImageResponseDto } from '@/application/dtos/images/DeleteImageResponseDto';
  
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
  });
  
  @ApiTags('images')
  @Controller('images')
  export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}
  
    @Post('upload')
    @HttpCode(HttpStatus.CREATED)
    @UseInterceptors(FileInterceptor('file', { storage }))
    @ApiOperation({ summary: 'Subir una imagen a Cloudinary' })
    @ApiConsumes('multipart/form-data')
    @ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Image successfully uploaded',
      type: UploadImageResponseDto,
    })
    @ApiBadRequestResponse({
      description: 'Invalid file format or upload error',
    })
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
      return { imageUrl: file.path };
    }
  
    @Get()
    @ApiOperation({ summary: 'Listar todas las imágenes subidas' })
    @ApiResponse({
      status: HttpStatus.OK,
      description: 'List of images retrieved successfully',
      type: ListImagesResponseDto,
    })
    async listImages() {
      const images = await this.imagesService.listImages();
      return { images };
    }
  
    @Get(':publicId')
    @ApiOperation({ summary: 'Obtener una imagen específica por su ID público' })
    @ApiResponse({
      status: HttpStatus.OK,
      description: 'Image retrieved successfully',
      type: UploadImageResponseDto,
    })
    @ApiNotFoundResponse({
      description: 'Image not found',
    })
    async getImage(@Param('publicId') publicId: string) {
      const imageUrl = await this.imagesService.getImage(publicId);
      return { imageUrl };
    }
  
    @Delete(':publicId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Eliminar una imagen específica por su ID público' })
    @ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Image deleted successfully',
      type: DeleteImageResponseDto,
    })
    @ApiNotFoundResponse({
      description: 'Image not found',
    })
    async deleteImage(@Param('publicId') publicId: string) {
      await this.imagesService.deleteImage(publicId);
      return { message: 'Image deleted successfully' };
    }
  }
  