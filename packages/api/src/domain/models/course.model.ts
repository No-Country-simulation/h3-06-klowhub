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
    courseImage: { type: String, required: false },
    category: { type: String, required: false },
    tags: { type: [String], required: false },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
    modules: [ModuleSchema],
    competencyLevel: { type: String, required: false },
    platform: { type: String, required: false },
    language: { type: String, required: false },
    functionalities: { type: [String], required: false },
    tools: { type: [String], required: false },
  },
  { timestamps: true },
);
