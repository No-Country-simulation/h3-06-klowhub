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
  descriptionContent?: string; //added MariaV
  competences?: string; //added MariaV
  requirements?: string; //added MariaV
  langage: string;
  sector: string;
  labels?: string[]; //added MariaV
  state?: 'DRAFT' | 'PUBLISHED' | 'REVIEW'; //added MariaV
  createdAt?: Date;
  updatedAt?: Date;
}
