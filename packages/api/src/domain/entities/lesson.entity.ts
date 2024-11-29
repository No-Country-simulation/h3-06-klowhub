export class LessonEntity {
  title: string;
  content: string;
  _id?: string;
  videoUrl?: string;

  constructor(title: string, content: string, _id?: string, videoUrl?: string) {
    this.title = title;
    this.content = content;
    this._id = _id;
    this.videoUrl = videoUrl;
  }
}
