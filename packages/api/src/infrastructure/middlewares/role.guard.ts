import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // Importa Reflector para manejar los metadatos

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    // Simulación: Usuario mock para pruebas (esto será dinámico con JWT en el futuro)
    request.user = {
      roles: ['VENDEDOR'], // Ajusta el rol según las pruebas
    };

    const userRoles = request.user.roles;

    // Verifica si al menos uno de los roles del usuario coincide con los requeridos
    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
