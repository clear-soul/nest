import type { Document } from 'mongoose';
import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

// 定义一个 UserDTO 接口，继承 Mongoose 的 Document 类型
export interface UserDTO extends Document {
  readonly uesrname: string;
  readonly age: number;
}
// 使用类验证器定义 CreateUserDto 类
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  uesrname: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive() //检查输入值是否为正数
  age: number;
}
