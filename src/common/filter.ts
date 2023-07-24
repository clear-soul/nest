import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

import { Request, Response } from 'express';

//内置 HttpException，可以从异常对象中提取错误消息和错误详情
@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus(); // 获取异常的HTTP状态码
    const errorResponse = exception.getResponse(); // 获取异常的响应体

    console.log(' 异常过滤器 👉👉👉 HttpFilter');

    response.status(status).json({
      time: new Date().toLocaleString(),
      path: request.url,
      err: errorResponse,
    });
  }
}
