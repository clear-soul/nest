import { Model } from 'mongoose';
import type { UserDTO } from './user.dto';
export declare class UserService {
    private readonly userInfoModel;
    constructor(userInfoModel: Model<UserDTO>);
    getUserList(): Promise<object>;
    getUserById(id: any): Promise<object>;
    createUser(body: any): Promise<object>;
}
