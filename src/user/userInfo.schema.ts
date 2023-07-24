import { Schema } from 'mongoose';

export const userInfoSchema = new Schema(
  {
    uesrname: { type: String, required: true },
    age: { type: Number, required: true },
    created: { type: Number },
    updated: { type: Number }, // 转化时间为 ms 时间戳
  },
  {
    timestamps: { createdAt: 'created', updatedAt: 'updated' }, //自动添加创建时间和更新时间
    versionKey: false, //去掉版本锁
  },
);
