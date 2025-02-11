import axios from "axios";
import { AppEntities, backendUrl } from "common/src";
import { appEntitiesSchemas } from "common/src/zodSchemas";
import { getZodIgnoreList } from ".";

class Crud {
    constructor(){}
    
  formImageUrls(data:any){
    function addUrls(data:any) {
      if (typeof data === "object") {
        if ("image" in data) {
           data.image = `${backendUrl}/images/${data.image}`;
        }
        if ("secondaryImage" in data) {
           data.secondaryImage = `${backendUrl}/images/${data.secondaryImage}`;
        }
      }
      return data
    }
    if (Array.isArray(data)){
      return data.map((item)=>addUrls(item))
    }else{
      return addUrls(data)
    }
  }

  async get(id:string, entity:AppEntities){
     const res = await axios.get(`${backendUrl}/${entity}/${id}`, {withCredentials:true})
     //@ts-ignore
     return appEntitiesSchemas[entity].passthrough().omit({"_id":true}).parse(this.formImageUrls(res.data)) 
    }
  async list(entity:AppEntities){
     const res = await axios.get(`${backendUrl}/${entity}`,  {withCredentials:true})
     //@ts-ignore
     return appEntitiesSchemas[entity].passthrough().omit(getZodIgnoreList(entity)).array().parse(this.formImageUrls(res.data)) 
    }

  async create(data:unknown, entity:AppEntities){
     const res = await axios.post(`${backendUrl}/${entity}`, data, {withCredentials:true})
     return  res.data as {id:string}
    }
  async update(id:string, entity:AppEntities, data:unknown){
    //@ts-ignore
    await axios.put(`${backendUrl}/${entity}/${id}`, appEntitiesSchemas[entity].omit(getZodIgnoreList(entity)).partial().parse(data), {withCredentials:true})
     
    }
  async delete(id:string, entity:AppEntities){
    await axios.delete(`${backendUrl}/${entity}/${id}`, {withCredentials:true})
    }
}

const crud  = new Crud()
export default crud