import { LessonEntity } from './lesson.entity';

export class ModuleEntity {
  title: string;
  description: string;
  lessons: LessonEntity[];
  _id?: string;

  constructor(
    title: string,
    description: string,
    lessons: LessonEntity[] = [],
    _id?: string,
  ) {
    this.title = title;
    this.description = description;
    this.lessons = lessons;
    this._id = _id;
  }

  addLesson(lesson: LessonEntity): void {
    this.lessons.push(lesson);
  }
}
