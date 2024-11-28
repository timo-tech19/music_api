import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, _: any, next: () => void) {
    console.log(
      `Request ... [${new Date().toISOString()}] ${req.method} ${req.url}`,
    );
    next();
  }
}
