import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/responseInterceptor';
import { LoggingInterceptor } from './common/loggingInterceptor';
import { HttpFilter } from './common/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册管道 用于验证
  app.useGlobalPipes(new ValidationPipe());
  // 注册过滤器
  app.useGlobalFilters(new HttpFilter());
  // 注册拦截器
  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new LoggingInterceptor(),
  );
  await app.listen(3000);
}
bootstrap();
