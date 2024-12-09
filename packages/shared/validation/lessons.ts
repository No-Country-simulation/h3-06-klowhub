import { z } from 'zod';

export const LessonSchema = z.object({
  /*prettier-ignore*/
  title: z.string() 
    .min(3, { message: 'El titulo debe tener como mínimo 3 caracteres' })
    .max(70, { message: 'El título debe tener como maximo 70 caracteres' })
    .trim(),
  content: z
    .string()
    .max(180, {
      message: 'La descripcion debe tener como máximo 180 caracteres',
    })
    .optional(),
  link: z.string().optional(),
  image: z
    .union([
      z.instanceof(File, { message: 'Image is required' }),
      z.string().optional(), // Allow the existing image URL for editing mode
    ])
    .refine((value) => value instanceof File || typeof value === 'string', {
      message: 'Image is required',
    }),
  video: z
    .union([
      z.instanceof(File, { message: 'video is required' }),
      z.string().optional(), // Allow the existing image URL for editing mode
    ])
    .refine((value) => value instanceof File || typeof value === 'string', {
      message: 'Image is required',
    }),
});
