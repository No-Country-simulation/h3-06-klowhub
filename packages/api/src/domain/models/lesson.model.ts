import { Schema, Types, model } from 'mongoose';

export interface ILesson {
  _id: Types.ObjectId;
  title: string;
  content: string;
  moduleId: Types.ObjectId;
  videoUrl?: string;
}

export const lessonSchema = new Schema<ILesson>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    moduleId: { type: Schema.Types.ObjectId, ref: 'Module', required: true },
    videoUrl: { type: String, required: false },
  },
  { timestamps: true },
);

export const Lesson = model<ILesson>('Lesson', lessonSchema);
