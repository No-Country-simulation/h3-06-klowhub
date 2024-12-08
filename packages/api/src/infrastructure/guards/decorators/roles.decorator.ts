import { SetMetadata } from '@nestjs/common';

// Define un decorador para establecer roles requeridos
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
