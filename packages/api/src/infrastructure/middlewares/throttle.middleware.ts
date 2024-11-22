import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class ThrottleMiddleware implements NestMiddleware {
  private redisClient: Redis.Redis;

  private readonly MAX_ATTEMPTS = 5; // Intentos permitidos
  private readonly ATTEMPT_WINDOW = 10 * 60; // Ventana de 10 minutos (en segundos)
  private readonly BLOCK_DURATION = 24 * 60 * 60; // Bloqueo de 24 horas (en segundos)

  constructor() {
    this.redisClient = new Redis.default({
      host: 'localhost', // Cambiar según la configuración de Redis
      port: 6379,
    });

    this.redisClient.on('error', (err) => {
      console.error('Error en Redis:', err);
    });
  }

  async use(req: any, res: any, next: () => void) {
    try {
      const ip = req.ip;
      const attemptsKey = `rate_limit:${ip}:attempts`;
      const blockKey = `rate_limit:${ip}:blocked`;

      // Verificar si la IP está bloqueada
      const isBlocked = await this.redisClient.get(blockKey);
      if (isBlocked) {
        throw new BadRequestException(
          'Demasiados intentos. Esta IP está bloqueada por 24 horas.',
        );
      }

      // Incrementar el contador de intentos
      const attempts = await this.redisClient.incr(attemptsKey);
      if (attempts === 1) {
        // Establecer una ventana de tiempo para los intentos
        await this.redisClient.expire(attemptsKey, this.ATTEMPT_WINDOW);
      }

      // Verificar si se excedieron los intentos
      if (attempts > this.MAX_ATTEMPTS) {
        // Bloquear la IP por 24 horas
        await this.redisClient.set(
          blockKey,
          'blocked',
          'EX',
          this.BLOCK_DURATION,
        );
        throw new BadRequestException(
          'Demasiados intentos. Esta IP está bloqueada por 24 horas.',
        );
      }

      next();
    } catch (error) {
      console.error('Error en ThrottleMiddleware:', error);
      throw error instanceof BadRequestException
        ? error
        : new BadRequestException('Error en la validación de solicitudes.');
    }
  }
}
