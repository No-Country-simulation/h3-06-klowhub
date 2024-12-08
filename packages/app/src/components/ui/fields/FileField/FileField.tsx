'use client';
import { cn } from '@/_lib';
import { FC, forwardRef, Ref } from 'react';
import { LuImport } from 'react-icons/lu';
import useFileFieldHook from './useFileFieldHook';

export type TFileFieldProps = {
  photo: string;
  onChange: any;
  className?: string;
  onBlur: any;
  ref: any;
};

const FileField: FC<TFileFieldProps> = forwardRef<
  HTMLInputElement,
  TFileFieldProps
>(({ photo, onChange, className, onBlur }, ref: Ref<HTMLInputElement>) => {
  const { urlImageLoaded, loadImagePreviewHandler } = useFileFieldHook({
    onChange,
    photo,
  });

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
        onChange={loadImagePreviewHandler}
        accept="image/*"
        name="image"
        ref={ref}
        onBlur={onBlur}
        id="coursImage"
        type="file"
        style={{ display: 'none' }}
      />
    </label>
  );
});

export default FileField;
