import { z } from 'zod';

export const PublishCoursGeneralSchema = z
  .object({
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
    price: z.number().optional(),
    level: z.enum(['basic', 'intermediate', 'advanced'], {
      required_error: 'El nivel es requerido',
    }),
    image: z
      .instanceof(File)
      .refine((file) => file.size > 0, 'La imagen es requerida')
      .refine(
        (file) => file.size < 1024 * 1024 * 5,
        'La imagen debe ser menor a 5MB',
      )
      .refine(
        (file) =>
          file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/jpg' ||
          file.type === 'image/webp',
        'Solo se permiten imágenes JPEG,PNG, JPG o WEBP',
      ),
    duration: z.number().min(0.1, 'La duracion debe ser mayor a 0'),
    platform: z.enum(['powerapps', 'appsheet']),
  })
  .refine((data) => data?.access === 'premiun' && !data?.price, {
    message: 'El precio es requerido para acceso premium',
    path: ['price'], // optional, specifies the path of the error
  });
