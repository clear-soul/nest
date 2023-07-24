import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserInfo(): object;
    getUserByIdQuery(id: any): object;
    getUserByIdParams(params: any, header: any): object;
    createUseInfo(body: CreateUserDto): object;
}
