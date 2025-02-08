import { AppEntities } from "common";

   
export function trimArray<T>(array:T[], maxLength:number) {
    if (array.length  > maxLength) {
        return array.slice(0, maxLength)
    }
    return array
}

export function getTimeDifference(dateString1:string, dateString2:string) {
    const date1 = new Date(dateString1)
    const date2 = new Date(dateString2)
    let Difference_In_Time =date2.getTime() - date1.getTime();

    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days
}

export function getZodIgnoreList(entity:AppEntities):Record<string, boolean> {
         switch (entity) {
           case "Category":
             return {_id:true}
             break;
           case "Car":
             return {_id:true, categoryId:true}
             break;
           case "Order":
             return {_id:true, carId:true, userId:true}
             break;
           case "User":
             return {_id:true}
             break;
         
           default:
             return {}
             break;
         }
       
} 