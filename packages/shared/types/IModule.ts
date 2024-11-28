import { ILesson } from "./ILesson";

export interface IModule {
    _id: string;
    title: string;
    description: string;
    lessons: ILesson[];
    courseId: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  