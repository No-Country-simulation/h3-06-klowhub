import { Schema, model, Types } from 'mongoose';
export interface IModule {
  _id: Types.ObjectId;
  name: string;
  courseId: Types.ObjectId; // Relación con el curso
  lessons: Types.ObjectId[]; // Relación con lecciones
}

export const moduleSchema = new Schema<IModule>(
  {
    name: { type: String, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  },
  { timestamps: true },
);

export const Module = model<IModule>('Module', moduleSchema);
