import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '@shared/types/users';
import { UserEntity } from '../../domain/entities/user.entities';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  // Crear usuario a partir de una entidad
  async create(userEntity: UserEntity): Promise<UserEntity> {
    const createdUser = new this.userModel({
      ...userEntity,
      roles: userEntity.roles || ['USUARIO_ESTANDAR'],
    });
    const savedUser = await createdUser.save();
    return this.toEntity(savedUser);
  }

  // Buscar usuario por email y devolver como entidad
  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.userModel.findOne({ email }).exec();
    return user ? this.toEntity(user) : null;
  }

  // Actualizar usuario a partir de una entidad
  async update(userEntity: UserEntity): Promise<UserEntity> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(userEntity._id, userEntity, { new: true })
      .exec();
    if (!updatedUser) {
      throw new Error('No se pudo actualizar el usuario.');
    }
    return this.toEntity(updatedUser);
  }

  // Conversión de modelo a entidad
  private toEntity(user: IUser): UserEntity {
    return new UserEntity(
      user.userName,
      user.fullName,
      user.email,
      user.password,
      user.isActive,
      user.confirmationToken,
      user._id?.toString(),
      user.roles,
    );
  }
}
