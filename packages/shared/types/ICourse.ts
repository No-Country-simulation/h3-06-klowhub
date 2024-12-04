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

export interface ICourse extends Document {
  _id: string;
  title: string;
  description: string;
  creatorId: string;
  imageUrl: string; // Ajustado desde "courseImage" a "imageUrl"
  tags: string[]; // Cambiado a obligatorio para consistencia con la entidad
  price: number;
  duration: number; // Agregado, ya que está en la entidad
  level: string; // Agregado, ya que está en la entidad
  isPublished: boolean;
  modules: IModule[];
  createdAt?: Date; // Incluido para manejar timestamps
  updatedAt?: Date; // Incluido para manejar timestamps
}
