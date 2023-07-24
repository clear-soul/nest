import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Query,
  Param,
  Headers,
  UseGuards,
  SetMetadata,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { RoleGuard } from '../role/role.guard';
// import { HttpFilter } from '../common/filter';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {} //注入服务
  // 等同于 this.userService = new userService()  nestjs语法糖

  @Get()
  // @UseFilters(HttpFilter) // 使用局部异常过滤器
  getUserInfo(): object {
    return this.userService.getUserList();
  }

  // 根据id查询 (Request)
  // @Get('/getUserById')
  // getUserByIdReq(@Request() req): object {
  // console.log(req);
  //   return this.userService.getUserById(req.query.id);
  // }

  // 简写 => 根据id查询(Query)
  @Get('/getUserById')
  getUserByIdQuery(@Query('id') id): object {
    return this.userService.getUserById(id);
  }

  //动态路由
  // @Get('/getUserByIdParams/:id')
  // getUserByIdDynamic(@Request() req): object {
  //   return this.userService.getUserById(req.params.id);
  // }

  //动态路由(Param 简写) @SetMetadata() 装饰器来为路由处理方法设置元数据
  @Get('/getUserByIdParams/:id')
  @SetMetadata('role', ['admin', 'user'])
  @UseGuards(RoleGuard)
  getUserByIdParams(@Param() params, @Headers() header): object {
    return this.userService.getUserById(params.id);
  }

  // key: info  value: 创建的值  校验CreateUserDto
  @Post('/createUser')
  @SetMetadata('role', ['admin', 'user'])
  @UseGuards(RoleGuard)
  createUseInfo(@Body('info') body: CreateUserDto): object {
    return this.userService.createUser(body);
  }
}
