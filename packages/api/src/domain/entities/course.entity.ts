import { ModuleEntity } from './module.entity';

export class CourseEntity {
  _id?: string;
  title: string;
  description: string;
  creatorId: string;
  modules: ModuleEntity[];
  price: number;
  duration: number;
  level: string;
  imageUrl: string;
  tags: string[];
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    title: string,
    description: string,
    creatorId: string,
    modules: ModuleEntity[] = [],
    price: number,
    duration: number,
    level: string,
    imageUrl: string,
    tags: string[],
    isPublished: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    _id?: string,
  ) {
    this.title = title;
    this.description = description;
    this.creatorId = creatorId;
    this.modules = modules;
    this.price = price;
    this.duration = duration;
    this.level = level;
    this.imageUrl = imageUrl;
    this.tags = tags;
    this.isPublished = isPublished;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this._id = _id;
  }

  addModule(module: ModuleEntity): void {
    this.modules.push(module);
  }
}
