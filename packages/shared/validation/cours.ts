import { z } from 'zod';

export const CourseSchema = z.object({
  /*prettier-ignore*/
  title: z.string() 
    .min(3, { message: 'El titulo debe tener como mínimo 3 caracteres' })
    .max(70, { message: 'El título debe tener como maximo 70 caracteres' })
    .trim(),
  description: z.string().max(180, {
    message: 'La descripcion debe tener como máximo 180 caracteres',
  }),
  /*prettier-ignore*/
  access: z.enum(['free', 'premiun'], { required_error: 'El tipo de acceso es requerido' }),
  price: z.string().optional(),
  level: z.enum(['basic', 'intermediate', 'advanced'], {
    required_error: 'El nivel es requerido',
  }),
  image: z
    .union([
      z.instanceof(File, { message: 'Image is required' }),
      z.string().optional(), // Allow the existing image URL for editing mode
    ])
    .refine((value) => value instanceof File || typeof value === 'string', {
      message: 'Image is required',
    }),
  duration: z.string(),
  platform: z.enum(['powerapps', 'appsheet']),
});

export const CourseSchemaDetail = z.object({
  descriptionContent: z.string(),
  competences: z.string(),
  requirements: z.string(),
  langage: z.string(),
  sector: z.string(),
  labels: z.array(z.string()),
});
