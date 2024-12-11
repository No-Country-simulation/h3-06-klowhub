import { ModuleEntity } from './module.entity';

export class CourseEntity {
  _id?: string;
  title: string;
  description: string;
  creatorId: string;
  modules: ModuleEntity[];
  price: number;
  duration: number;
  imageUrl: string;
  tags: string[];
  isPublished: boolean;
  competencyLevel?: string;
  platform?: string;
  language?: string;
  functionalities?: string[];
  tools?: string[];
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    title: string,
    description: string,
    creatorId: string,
    modules: ModuleEntity[] = [],
    price: number,
    duration: number,
    imageUrl: string,
    tags: string[],
    isPublished: boolean,
    competencyLevel?: string,
    platform?: string,
    language?: string,
    functionalities?: string[],
    tools?: string[],
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
    this.imageUrl = imageUrl;
    this.tags = tags;
    this.isPublished = isPublished;
    this.competencyLevel = competencyLevel;
    this.platform = platform;
    this.language = language;
    this.functionalities = functionalities;
    this.tools = tools;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this._id = _id;
  }
}
