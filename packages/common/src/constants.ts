export enum AppEntities {
    Category="Category",
    Car="Car",
    User="User",
    Order="Order",
}
export const AppEntitityForcedRuntime:Record<AppEntities,AppEntities> = {
    [AppEntities.Category]:AppEntities.Category,
    [AppEntities.Car]:AppEntities.Car,
    [AppEntities.Order]:AppEntities.Order,
    [AppEntities.User]:AppEntities.User,
   
}

export const backendUrl = "http://localhost:3000"
export const frontendUrl = "http://localhost:5173"