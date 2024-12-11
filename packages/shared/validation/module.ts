import { z } from 'zod';

export const ModuleSchema = z.object({
  /*prettier-ignore*/
  title: z.string() 
    .min(3, { message: 'El titulo debe tener como mínimo 3 caracteres' })
    .max(70, { message: 'El título debe tener como maximo 70 caracteres' })
    .trim(),
  description: z
    .string()
    .max(180, {
      message: 'La descripcion debe tener como máximo 180 caracteres',
    })
    .optional(),
});
