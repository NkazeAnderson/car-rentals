import { Response, Request, NextFunction } from "express";

export async function functionExecWithErrorResponder<T>(func:()=>Promise<T>, error:{code:400|500, message:string}):Promise<T> {
    try {
       return await func()
    } catch (e) {
        console.log(e);
        throw new Error(JSON.stringify(error));
    }
}

export function routeHandler(next:NextFunction, func: ()=>Promise<void>) {
       func().catch(e=>{
           next(e)
       })
}