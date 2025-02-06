import {AppEntities, commonZodSchemas}  from "common"
import { zodSchema } from "@zodyac/zod-mongoose";
import { model } from "mongoose";

const {appEntitiesSchemas} = commonZodSchemas
const categoryMongooseSchema = zodSchema(appEntitiesSchemas[AppEntities.Category])
const carMongooseSchema = zodSchema(appEntitiesSchemas[AppEntities.Car])
const userMongooseSchema = zodSchema(appEntitiesSchemas[AppEntities.User])
const orderMongooseSchema = zodSchema(appEntitiesSchemas[AppEntities.Order])
const categoryModel = model(AppEntities.Category, categoryMongooseSchema);
const carModel = model(AppEntities.Car, carMongooseSchema);
 const userModel = model(AppEntities.User, userMongooseSchema);
 const orderModel = model(AppEntities.Order, orderMongooseSchema);

categoryMongooseSchema.virtual("cars").get(async function(){
    return await carModel.find({categoryId:this._id})
})

 const models = {
    [AppEntities.Car]: carModel,
    [AppEntities.Category]: categoryModel,
    [AppEntities.Order]: orderModel,
    [AppEntities.User]: userModel
}

export default models