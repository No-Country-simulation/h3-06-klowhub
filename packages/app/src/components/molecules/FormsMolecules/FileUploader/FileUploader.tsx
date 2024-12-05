'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { LuImport } from 'react-icons/lu';

export type TFileUploaderProps = {
  photo: string;
  isOpen?: (val: Boolean) => void;
};

const FileUploader: FC<TFileUploaderProps> = ({
  photo,
  isOpen = () => true,
}) => {
  const [urlImageLoaded, setUrlImageLoaded] = useState(''); // if url exists will storage url file
  const [file, setFile] = useState<File | null | undefined>(null); //if file is charged it will storage the file to send
  const [isImageCharged, setIsImageCharged] = useState(''); //control input value image (for reset)
  const contentRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (photo) {
      setUrlImageLoaded(photo);
    }
  }, [photo]);

  const loadImagePreviewHandler = (e: {
    target: { files: FileList | null };
  }) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const result = e?.target?.result;
        if (result !== null) {
          setUrlImageLoaded(result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      setUrlImageLoaded('');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        const result = e?.target?.result;
        if (result !== null) {
          setUrlImageLoaded(result as string);
        }
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log('submit file');
        }}
        encType="multipart/form-data"
      >
        <div>
          <div>
            <label
              htmlFor="coursImage"
              className="h-[237px] w-[507px] flex flex-col items-center justify-center gap-3 border border-dashed border-secondary-200 bg-secondary-900"
              ref={dropRef}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {urlImageLoaded ? (
                <img
                  className="w-full h-full object-cover"
                  src={urlImageLoaded}
                  alt="imageLoaded"
                />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <LuImport className="h-12 w-12" />
                  <span>Haga click aquí para subir el archivo</span>
                </div>
              )}
              <input
                onChange={loadImagePreviewHandler}
                accept="image/*"
                name="image"
                id="coursImage"
                type="file"
                style={{ display: 'none' }}
                value={isImageCharged}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FileUploader;
