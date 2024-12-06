'use client';
import { useEffect, useState } from 'react';

type TUseFieldHookProps = {
  onChange: (file: File) => void;
  photo: string;
};
const useFileFieldHook = ({ onChange, photo }: TUseFieldHookProps) => {
  const [urlImageLoaded, setUrlImageLoaded] = useState('');

  useEffect(() => {
    if (photo) {
      setUrlImageLoaded(photo);
    }
  }, [photo]);

  useEffect(() => {
    return () => {
      if (urlImageLoaded) {
        URL.revokeObjectURL(urlImageLoaded);
      }
    };
  }, [urlImageLoaded]);
  const loadImagePreviewHandler = async (e: {
    target: { files: FileList | null };
  }) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const url = await URL.createObjectURL(file);
        setUrlImageLoaded(url);
        onChange(file);
      } catch (error) {
        console.error(error);
        // Aquí puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje de error al usuario
      }
    } else {
      setUrlImageLoaded('');
    }
  };
  return { loadImagePreviewHandler, urlImageLoaded, setUrlImageLoaded };
};

export default useFileFieldHook;