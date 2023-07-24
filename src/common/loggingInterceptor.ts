import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<object> {
    const request = context.switchToHttp().getRequest();
    const now = Date.now();

    return next.handle().pipe(
      tap(() =>
        //计算自请求开始以来到结束的所花的时间并将其打印到控制台  异常走不到这里面
        console.log(
          `耗时拦截器  ${request.originalUrl} 路由耗时 ${Date.now() - now}ms`,
        ),
      ),
    );
  }
}
