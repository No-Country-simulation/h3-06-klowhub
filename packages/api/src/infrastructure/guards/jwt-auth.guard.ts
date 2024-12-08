import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Usa el 'jwt' strategy definido en tu módulo de autenticación
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
