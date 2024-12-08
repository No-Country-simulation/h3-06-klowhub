import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req.cookies?.accessToken,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    console.log('Payload recibido:', payload);
    return {
      userId: payload.sub,
      username: payload.username,
      roles: payload.roles,
    };
  }
}

function Injectable(): (target: typeof JwtStrategy) => void | typeof JwtStrategy {
    throw new Error('Function not implemented.');
}
