import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TestqqModule } from './testqq/testqq.module';

let entrypoint = 'mongodb://127.0.0.1/user';

switch (process.env.NODE_ENV) {
  case 'development':
    entrypoint = 'mongodb://127.0.0.1/user';
    break;
}

@Module({
  imports: [UserModule, MongooseModule.forRoot(entrypoint), TestqqModule],
  controllers: [AppController],
  providers: [AppService],
})
// AppModule 是一个具有 @Module 装饰器的类定义 AppModule 的所有重要信息都包含在装饰器中
export class AppModule {}
