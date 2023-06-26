import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthJwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(req);

    if (!token) throw new UnauthorizedException('No access token provided');

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('auth.secret'),
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      req['user'] = payload;
    } catch (exception) {
      console.error(exception);

      if (exception instanceof jwt.TokenExpiredError)
        throw new UnauthorizedException('Token Expired');

      throw new UnauthorizedException('Cannot verify token');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
