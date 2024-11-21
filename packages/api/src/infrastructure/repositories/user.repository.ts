import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../../domain/interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(user: Partial<IUser>): Promise<IUser> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return this.userModel.findOne({ email });
  }
}
