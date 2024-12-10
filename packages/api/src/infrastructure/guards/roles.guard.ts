import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Obtener los roles requeridos desde los metadatos del controlador o handler
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // Si no se especifican roles, no se restringe el acceso
    }

    // Obtener el usuario autenticado desde el objeto request
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Si no hay usuario (no autenticado), negar acceso
    if (!user || !user.roles) {
      return false;
    }

    // Verificar si el usuario tiene al menos uno de los roles requeridos
    const userRoles = user.roles;
    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
