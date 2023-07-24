import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// 从路由处理程序中提取元数据
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';

@Injectable()
//根据给定的角色列表决定用户是否有权访问该路由
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // role 元数据键，在装饰器设置元数据时使用的
    // Reflector 反射读取 setMetaData的值 key 读取出用户的角色信息
    const role = this.reflector.get<string[]>('role', context.getHandler());
    console.log('守卫 👉👉👉 RoleGuard', role);

    // 如果没有角色限制，则允许访问
    if (!role) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    // role 存在 query中
    const user = request.query.role as string;

    // 检查用户是否角色
    return user && role.includes(user);
  }
}
