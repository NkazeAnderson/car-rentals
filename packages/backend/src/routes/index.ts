import { AppEntities } from "common";
import { Router } from "express";
import crud from "../crud/crud";
import { commonZodSchemas } from "common";
import { functionExecWithErrorResponder, routeHandler } from "./handlers";

const routes = Router()
const {appEntitiesSchemas} = commonZodSchemas

function routeProtection(entity:AppEntities , method: "get" | "list" |"update" | "create"| "delete" , signedUserId?:string) {
 
    switch (method) {
        case "get":
            if (entity === AppEntities.Order && !signedUserId) {
                throw new Error("UnAuthorized");  
            }
            break;
        case "list":
            if ((entity === AppEntities.Order || entity === AppEntities.User) && !signedUserId) {
                throw new Error("UnAuthorized");  
            }
            break;
        case "create":
            if (( entity === AppEntities.Car || entity === AppEntities.Category) && !signedUserId) {
                throw new Error("UnAuthorized");  
            }
            break;
        case "delete":
            if ( !signedUserId) {
                throw new Error("UnAuthorized");  
            }
            break;
        case "update":
            if ( !signedUserId) {
                throw new Error("UnAuthorized");  
            }
            break;
       
    
        default:
            break;
    }
}

function generateCrudRoutes(entity:AppEntities) {
    const basePath = entity.toLocaleLowerCase()
    const schema = appEntitiesSchemas[entity]
    routes.get(`/${basePath}/:id`, 
       async (req, res, next)=>{
        routeHandler(next, async()=>{
            const id = req.params.id
            routeProtection(entity, "get", req.signedCookies.userId )
            const data = await functionExecWithErrorResponder(async()=>await crud.get(entity, id),  {code:400, message:"Can't find item with Id"})
            const parsedData = await functionExecWithErrorResponder(async()=>schema.passthrough().parse(data),  {code:500, message:""})
            res.json(parsedData)
        })
        }
    )

    routes.get(`/${basePath}`, 
       async (req, res, next)=>{
        routeHandler(next, async()=>{
            routeProtection(entity, "list", req.signedCookies.userId )
            const data = await functionExecWithErrorResponder(async()=>await crud.list(entity),  {code:400, message:"Can't find items"})
            const parsedData = await functionExecWithErrorResponder(async()=>schema.passthrough().array().parse(data),  {code:500, message:""})
            res.json(parsedData)
        })
        }
    )

    routes.post(`/${basePath}`, 
       async (req, res, next)=>{
        routeHandler(next, async ()=>{
            // routeProtection(entity, "create", req.signedCookies.userId )
            //@ts-ignore
            const parsedData = await functionExecWithErrorResponder(async()=>schema.omit({"_id":true}).parse(req.body),  {code:400, message:""})
             const id = await functionExecWithErrorResponder(async()=>await crud.create(entity, parsedData),  {code:400, message:"This data is malformed"})
             res.json({id})
        })
        }
    )
   
    routes.put(`/${basePath}/:id`, 
       async (req, res, next)=>{
        routeHandler(next, async ()=>{
            routeProtection(entity, "update", req.signedCookies.userId )
            const parsedData = await functionExecWithErrorResponder(async()=>schema.partial().parse(req.body),  {code:400, message:"This data is malformed"})
            const id = req.params.id
             await functionExecWithErrorResponder(async()=>await crud.update(entity, id, parsedData),  {code:400, message:"This data is malformed"})
             res.json({status:"updated"})
        })
        }
    )
   
    routes.delete(`/${basePath}/:id`, 
       async (req, res, next)=>{
        routeHandler(next, async ()=>{
            routeProtection(entity, "delete", req.signedCookies.userId )
            const id = req.params.id
             await functionExecWithErrorResponder(async()=>await crud.delete(entity, id),  {code:400, message:"This data is malformed"})
             res.json({status:"deleted"})
        })
        }
    )
}


generateCrudRoutes(AppEntities.Car)
generateCrudRoutes(AppEntities.Category)
generateCrudRoutes(AppEntities.Order)
generateCrudRoutes(AppEntities.User)

export default routes
