'use client';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tiptap from './components/TipTap';

const NotePicker = () => {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (reason: string) => {
    setContent(reason);
  };

  // Save the champ in localhost
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = {
      id: uuidv4(),
      content,
    };
    // check if there are an existing data string in localStorage (24:29)
  }

  function handleBlur(event: FocusEvent): void {
    handleSubmit({} as React.FormEvent<HTMLFormElement>);
  }

  return (
    <form
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    >
      <div className="text-3xl text-center text-secondary-200 mb-10">
        Notes Picker
      </div>
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default NotePicker;
