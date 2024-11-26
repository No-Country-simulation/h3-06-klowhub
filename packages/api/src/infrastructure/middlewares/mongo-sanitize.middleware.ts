import { Injectable, NestMiddleware } from '@nestjs/common';
import mongoSanitize from 'express-mongo-sanitize';

@Injectable()
export class MongoSanitizeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    mongoSanitize({
      replaceWith: '_', // Reemplaza "$" y "." con "_"
    });
    next();
  }
}
