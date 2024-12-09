import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImagesController } from '@/infrastructure/controllers/images.controller';
import { ImagesService } from '@/infrastructure/utils/cloudinary.service';

@Module({
  imports: [ConfigModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}