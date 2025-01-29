"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const zod_1 = require("zod");
const baseString = zod_1.z.string().trim().toLowerCase();
exports.categorySchema = zod_1.z.object({
    name: baseString,
    description: baseString,
    image: baseString
});
