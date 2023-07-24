import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import type { UserDTO } from './user.dto';

// @Injectable 是一个装饰器，用于将类标记为可被依赖注入的提供者（Provider）
// 使用 @Injectable 装饰器将 UserService 类声明为可被依赖注入的提供者
@Injectable()
export class UserService {
  /*
    构造函数收到这个注入的 userInfoModel，它将其值分配给类的私有属性（成员变量）this.userInfoModel
    这个类实例的其他方法可以使用 this.userInfoModel 访问此模型，并使用 Mongoose 的 API 操作 userInfo 集合
  */
  constructor(
    // 用于将 Mongoose userInfo数据模型注入
    @InjectModel('userInfo')
    private readonly userInfoModel: Model<UserDTO>,
  ) {}

  async getUserList(): Promise<object> {
    const list = await this.userInfoModel.find(); // 查询所有数据
    return { list };
  }

  async getUserById(id): Promise<object> {
    const info = await this.userInfoModel.find({ _id: id });
    if (!info.length) {
      throw new HttpException('用户不存在', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return { info };
  }

  // 新增
  async createUser(body): Promise<object> {
    await this.userInfoModel.insertMany(body); // 插入数据

    return {};
  }
}
