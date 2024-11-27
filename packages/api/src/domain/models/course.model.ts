import { Schema, model, Types } from 'mongoose';

export interface ILesson {
  _id: Types.ObjectId;
  title: string;
  content: string;
}

export interface IModule {
  _id: Types.ObjectId;
  title: string;
  description: string;
  lessons: Types.DocumentArray<ILesson>;
}

export interface ICourse {
  _id: Types.ObjectId;
  title: string;
  description: string;
  creatorId: Types.ObjectId;
  modules: Types.DocumentArray<IModule>;
}

const lessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const moduleSchema = new Schema<IModule>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  lessons: [lessonSchema],
});

export const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    modules: [moduleSchema],
  },
  { timestamps: true },
);

export const Course = model<ICourse>('Course', courseSchema);
