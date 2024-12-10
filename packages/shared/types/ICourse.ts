export interface ILesson {
  title: string;
  content: string;
  videoUrl?: string;
  _id?: string;
}

export interface IModule {
  title: string;
  description: string;
  lessons: ILesson[];
  _id?: string;
}

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  creatorId: string;
  modules: IModule[];
  price: number;
  duration: number;
  level: string;
  imageUrl: string;
  tags: string[];
  isPublished: boolean;
  competencyLevel?: string;
  platform?: string;
  language?: string;
  sector?: string;
  functionalities?: string[];
  tools?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
