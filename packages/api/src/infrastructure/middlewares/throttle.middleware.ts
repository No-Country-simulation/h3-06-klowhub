import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ThrottleMiddleware implements NestMiddleware {
  private attempts: Map<string, { count: number; timer: NodeJS.Timeout }> =
    new Map();

  use(req: any, res: any, next: () => void) {
    const ip = req.ip;

    if (!this.attempts.has(ip)) {
      this.attempts.set(ip, { count: 0, timer: null });
    }

    const attemptData = this.attempts.get(ip);
    attemptData.count++;
    if (attemptData.count > 3) {
      res.set('X-Require-Captcha', 'true');
    }
    if (attemptData.count > 5) {
      return res
        .status(429)
        .send('Demasiados intentos, por favor inténtalo más tarde.');
    }

    if (!attemptData.timer) {
      attemptData.timer = setTimeout(
        () => this.attempts.delete(ip),
        10 * 60 * 1000,
      );
    }

    this.attempts.set(ip, attemptData);
    next();
  }
}
