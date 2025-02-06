import axios from "axios";
import { backendUrl } from "../constants";
import { AppEntities } from "common";
import { appEntitiesSchemas } from "common/src/zodSchemas";

class Crud {
    constructor(){}

    ignoreList(entity:AppEntities):Record<string, boolean>{
      switch (entity) {
        case "Category":
          return {_id:true}
          break;
        case "Car":
          return {_id:true, categoryId:true}
          break;
      
        default:
          return {}
          break;
      }
    }
  async get(id:string, entity:AppEntities){
     const res = await axios.get(`${backendUrl}/${entity}/${id}`)
     //@ts-ignore
     return appEntitiesSchemas[entity].passthrough().omit({"_id":true}).parse(res.data) 
    }
  async list(entity:AppEntities){
     const res = await axios.get(`${backendUrl}/${entity}`)
     //@ts-ignore
     return appEntitiesSchemas[entity].passthrough().omit(this.ignoreList(entity)).array().parse(res.data) 
    }

  async create(data:unknown, entity:AppEntities){
     const res = await axios.post(`${backendUrl}/${entity}`, data)
     return  res.data as {id:string}
    }
  async update(id:string, entity:AppEntities, data:unknown){
    //@ts-ignore
    await axios.put(`${backendUrl}/${entity}/${id}`, appEntitiesSchemas[entity].omit({"_id":true}).partial().parse(data))
     
    }
  async delete(id:string, entity:AppEntities){
    await axios.delete(`${backendUrl}/${entity}/${id}`)
     
    }
}

const crud  = new Crud()
export default crud