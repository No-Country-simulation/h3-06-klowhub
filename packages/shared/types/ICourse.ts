import { IModule } from './IModule';
export interface ICourse {
  _id: string;
  title: string;
  description: string;
  creatorId: string;
  modules: IModule[];
  createdAt?: Date;
  updatedAt?: Date;
}
