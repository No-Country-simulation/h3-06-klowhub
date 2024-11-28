export class LessonEntity {
  title: string;
  content: string;
  _id?: string;

  constructor(title: string, content: string, _id?: string) {
    this.title = title;
    this.content = content;
    this._id = _id;
  }
}
