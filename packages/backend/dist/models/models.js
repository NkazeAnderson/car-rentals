"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("common");
const zod_mongoose_1 = require("@zodyac/zod-mongoose");
const mongoose_1 = require("mongoose");
const { appEntitiesSchemas } = common_1.commonZodSchemas;
const categoryMongooseSchema = (0, zod_mongoose_1.zodSchema)(appEntitiesSchemas[common_1.AppEntities.Category]);
const carMongooseSchema = (0, zod_mongoose_1.zodSchema)(appEntitiesSchemas[common_1.AppEntities.Category]);
const userMongooseSchema = (0, zod_mongoose_1.zodSchema)(appEntitiesSchemas[common_1.AppEntities.Category]);
const orderMongooseSchema = (0, zod_mongoose_1.zodSchema)(appEntitiesSchemas[common_1.AppEntities.Category]);
const categoryModel = (0, mongoose_1.model)(common_1.AppEntities.Category, categoryMongooseSchema);
const carModel = (0, mongoose_1.model)(common_1.AppEntities.Car, carMongooseSchema);
const userModel = (0, mongoose_1.model)(common_1.AppEntities.User, userMongooseSchema);
const orderModel = (0, mongoose_1.model)(common_1.AppEntities.Order, orderMongooseSchema);
categoryMongooseSchema.virtual("cars").get(function () {
    return __awaiter(this, void 0, void 0, function* () {
        return yield carModel.find({ categoryId: this._id });
    });
});
const models = {
    [common_1.AppEntities.Car]: carModel,
    [common_1.AppEntities.Category]: categoryModel,
    [common_1.AppEntities.Order]: orderModel,
    [common_1.AppEntities.User]: userModel
};
exports.default = models;
