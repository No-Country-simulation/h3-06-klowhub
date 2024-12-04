import { Schema } from 'mongoose';

export const LessonSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String },
});

export const ModuleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  lessons: [LessonSchema],
});

export const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: String, required: true },
    courseImage: { type: String, required: false }, // Nuevo campo
    category: { type: String, required: false }, // Nuevo campo
    tags: { type: [String], required: false }, // Nuevo campo
    price: { type: Number, required: true }, // Nuevo campo
    rating: { type: Number, default: 0 }, // Nuevo campo
    isPublished: { type: Boolean, default: false }, // Nuevo campo
    modules: [ModuleSchema],
  },
  { timestamps: true },
);
