export interface ILesson {
  _id: string;
  title: string;
  content: string;
  moduleId: string;
  videoUrl: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}
