import type { Document } from 'mongoose';
export interface UserDTO extends Document {
    readonly uesrname: string;
    readonly age: number;
}
export declare class CreateUserDto {
    uesrname: string;
    age: number;
}
