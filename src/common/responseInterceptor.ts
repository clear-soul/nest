import type {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import type { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<object> {
    // 继续处理响应
    console.log('进入响应数据格式拦截器 👉👉👉 ResponseInterceptor');

    return next.handle().pipe(
      map((data) => {
        // 对响应进行进一步的处理

        return {
          retcode: 0,
          data,
          msg: '请求成功',
        };
      }),
      catchError((error) => {
        // 抛出异常时触发
        console.error('捕获异常 👉👉👉', error);
        // 抛出异常传递给全局异常过滤器
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }),
    );
  }
}
