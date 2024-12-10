'use client';
import { cn } from '@/_lib';
import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { LuImport } from 'react-icons/lu';

export type TFileFieldProps = {
  urlImage: string;
  onChange: (file: File) => void;
  className?: string;
  onBlur?: () => void;
  name?: string;
};

const FileField = forwardRef<HTMLInputElement, TFileFieldProps>(
  (
    { urlImage, name, onChange, onBlur, className }: TFileFieldProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const dropRef = useRef<HTMLLabelElement>(null);
    const [urlImageLoaded, setUrlImageLoaded] = useState<string | null>(
      urlImage || null,
    );
    const [file, setFile] = useState<File | null>(null);
    const idFile = 'imageId';
    useEffect(() => {
      if (file instanceof File) {
        const imageUrl = URL.createObjectURL(file);
        setUrlImageLoaded(imageUrl);
        return () => URL.revokeObjectURL(imageUrl);
      }
    }, [file]);

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
      <label
        htmlFor={idFile}
        className={cn(
          'h-[237px] w-full flex flex-col items-center justify-center gap-3 border border-dashed border-secondary-200 bg-secondary-900',
          className,
        )}
        ref={dropRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {urlImageLoaded ? (
          <img
            className="w-full h-full object-fill"
            src={urlImageLoaded}
            alt="imageLoaded"
          />
        ) : (
          <div className="flex flex-col justify-center items-center gap-3">
            <LuImport className="h-12 w-12" />
            <span className="text-center">
              Haga click aquí para subir el archivo
            </span>
          </div>
        )}

        <input
          onChange={(e) => {
            const newFile = e.target.files?.[0];
            if (newFile) {
              setFile(newFile);
              onChange(newFile); // Envía el objeto File
            }
          }}
          onBlur={onBlur}
          accept="image/*"
          name={name}
          id={idFile}
          type="file"
          style={{ display: 'none' }}
          ref={ref}
        />
      </label>
    );
  },
);
FileField.displayName = 'FileField';
export default FileField;
