import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userInfoSchema } from './userInfo.schema';
import { AuthMiddleware } from '../auth/auth.middleware';

@Module({
  //用于注册当前模块所需的 Mongoose 数据模型的方法  需要一个数组作为参数，数组的每一项是一个对象，用于描述一个数据模型
  // name 表示数据模型的名称，schema 表示对应的 Mongoose schema
  imports: [
    MongooseModule.forFeature([{ name: 'userInfo', schema: userInfoSchema }]),
  ],
  controllers: [UserController], // 控制器路由
  //导入Service，并将其 依赖注入providers数组，Nest.js应用会提供 UserService
  providers: [UserService],
})
// UserModule 类实现了 NestModule 接口（通过 implements NestModule），表示这个模块需要配置中间件
export class UserModule implements NestModule {
  // MiddlewareConsumer 中间件消费者 配置和应用中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: 'user/createUser',
      method: RequestMethod.POST,
    });
  }
}
