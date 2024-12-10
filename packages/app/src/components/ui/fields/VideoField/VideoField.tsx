'use client';
import { cn } from '@/_lib';
import { forwardRef, Ref, useEffect, useState } from 'react';
import { LuImport } from 'react-icons/lu';

export type TVideoFieldProps = {
  urlVideo: string;
  onChange: (file: File) => void;
  className?: string;
  onBlur?: () => void;
  name?: string;
};

const VideoField = forwardRef<HTMLInputElement, TVideoFieldProps>(
  (
    { urlVideo, name, onChange, onBlur, className }: TVideoFieldProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [urlVideoLoaded, setUrlVideoLoaded] = useState<string | null>(
      urlVideo || null,
    );
    const [file, setFile] = useState<File | null>(null);
    const idVideo = 'video';
    useEffect(() => {
      if (file instanceof File) {
        const imageUrl = URL.createObjectURL(file);
        setUrlVideoLoaded(imageUrl);
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
            setUrlVideoLoaded(result as string);
          }
        };
        reader.readAsDataURL(file);
        setFile(file);
      }
    };

    return (
      <label
        htmlFor={idVideo}
        className={cn(
          'h-[237px] w-full flex flex-col items-center justify-center gap-3 border border-dashed border-secondary-200 bg-secondary-900',
          className,
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {urlVideoLoaded ? (
          <video
            className="w-full h-full object-fill"
            src={urlVideoLoaded}
            autoPlay
            loop
            muted
          >
            {/* <track
              kind="description"
              srcLang="en"
              src="videoDescription.vtt" // Replace with the actual description file URL
            /> */}
          </video>
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
          accept="video/*"
          name={name}
          id={idVideo}
          type="file"
          style={{ display: 'none' }}
          ref={ref}
        />
      </label>
    );
  },
);
VideoField.displayName = 'VideoField ';
export default VideoField;
