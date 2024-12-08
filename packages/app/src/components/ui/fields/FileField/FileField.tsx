'use client';
import { cn } from '@/_lib';
import { forwardRef, Ref, useEffect, useState } from 'react';
import { LuImport } from 'react-icons/lu';

export type TFileFieldProps = {
  urlImage: string;
  onChange: (file: File) => void;
  className?: string;
  onBlur: () => void;
  name: string;
};

const FileField = forwardRef<HTMLInputElement, TFileFieldProps>(
  (
    { urlImage, name, onChange, onBlur, className }: TFileFieldProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [urlImageLoaded, setUrlImageLoaded] = useState<string | null>(
      urlImage || null,
    );
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
      if (file instanceof File) {
        const imageUrl = URL.createObjectURL(file);
        setUrlImageLoaded(imageUrl);
        return () => URL.revokeObjectURL(imageUrl);
      }
    }, [file]);

    return (
      <label
        htmlFor="coursImage"
        className={cn(
          'h-[237px] w-full flex flex-col items-center justify-center gap-3 border border-dashed border-secondary-200 bg-secondary-900',
          className,
        )}
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
          id="coursImage"
          type="file"
          style={{ display: 'none' }}
          ref={ref}
        />
      </label>
    );
  },
);

export default FileField;
