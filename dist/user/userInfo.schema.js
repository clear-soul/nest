"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userInfoSchema = new mongoose_1.Schema({
    uesrname: { type: String, required: true },
    age: { type: Number, required: true },
    created: { type: Number },
    updated: { type: Number },
}, {
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
    versionKey: false,
});
//# sourceMappingURL=userInfo.schema.js.map