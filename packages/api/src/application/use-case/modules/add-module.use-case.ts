import { Injectable, NotFoundException } from '@nestjs/common';
import { ModuleRepository } from '../../../infrastructure/repositories/module.repository';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import { ModuleDto } from '../../dtos/create-module.dto';

@Injectable()
export class AddModuleUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(courseId: string, ModuleDto: ModuleDto): Promise<ModuleEntity> {
    // Crear una instancia de ModuleEntity desde el DTO
    const moduleEntity = new ModuleEntity(
      ModuleDto.title,
      ModuleDto.description,
      ModuleDto.lessons,
    );

    // Llamar al repositorio para agregar el módulo
    const module = await this.moduleRepository.createModule(
      courseId,
      moduleEntity,
    );

    if (!module) {
      throw new NotFoundException(
        `Failed to add module to course with ID ${courseId}`,
      );
    }

    return module;
  }
}
