/* import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'mi-app', // Cambia según la carpeta deseada
    allowed_formats: ['jpg', 'png', 'webp'], // Formatos permitidos
    transformation: [{ width: 800, height: 600, crop: 'limit' }], // Opciones de transformación
  },
});

export const upload = multer({ storage });
 */