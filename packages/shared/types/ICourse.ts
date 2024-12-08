import { IModule } from './IModule';
export interface ICourse {
  _id: string;
  title: string;
  description: string;
  creatorId: string;
  access: 'free' | 'premiun'; //added MariaV
  price: number; //added MariaV
  duration: number; //added MariaV
  level: 'basic' | 'intermediate' | 'advanced'; //added MariaV
  platform: 'appsheet' | 'powerapps'; //added MariaV
  image: File; //added MariaV
  modules: IModule[];
  createdAt?: Date;
  updatedAt?: Date;
}
