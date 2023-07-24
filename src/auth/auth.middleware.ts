import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    console.log('=============>');
    console.log('中间件 👉👉👉 AuthMiddleware');
    if (token && token === 'validToken') {
      next();
    } else {
      res.status(401).json({ message: '未经授权' });
    }
  }
}
