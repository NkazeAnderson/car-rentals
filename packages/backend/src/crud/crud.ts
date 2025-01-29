import { AppEntities } from "common";
import models from "../models/models";
import { appEntitiesSchemas, carT, categoryT, orderT, userT } from "common/src/zodSchemas";
import { Model } from "mongoose";

type dataT<T extends  AppEntities>= T extends AppEntities.Car 
? carT : T extends AppEntities.Category 
? categoryT :  T extends AppEntities.Order 
? orderT  :  T extends AppEntities.User ? userT : never

class Crud{
    private getModel(entity:AppEntities){
       return models[entity] as Model<any>
    }
   async create<T extends AppEntities>(entity:T, data:dataT<T>){
    const model = this.getModel(entity)
    await model.create(data)
   }
   async get(entity:AppEntities, id:string){
    const model = this.getModel(entity)
    return await model.findById(id)
   }

   async update<T extends AppEntities>(entity:T, id:string, data:Partial<dataT<T>>){
    const model = this.getModel(entity)
    await model.findByIdAndUpdate(id, data)
   }
   async delete(entity:AppEntities, id:string){
    const model = this.getModel(entity)
    await model.findByIdAndDelete(id)
   }

}

const crud = new Crud()
export default crud