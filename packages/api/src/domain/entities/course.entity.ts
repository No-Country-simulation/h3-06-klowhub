import { ModuleEntity } from './module.entity';

export class CourseEntity {
  title: string;
  description: string;
  creatorId: string;
  modules: ModuleEntity[];
  _id?: string;

  constructor(
    title: string,
    description: string,
    creatorId: string,
    modules: ModuleEntity[] = [],
    _id?: string,
  ) {
    this.title = title;
    this.description = description;
    this.creatorId = creatorId;
    this.modules = modules;
    this._id = _id;
  }

  addModule(module: ModuleEntity): void {
    this.modules.push(module);
  }
}
