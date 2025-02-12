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

export const contactInfo = {
    email: "test@gmail.com",
    phone:"77377373",
    address:"asad, ny, 3663",
    facebook:"/",
    instagram:"/",
    twitter:"/"
   }

export const backendUrl = "https://car-rentals-backend-2r6l.onrender.com"
export const frontendUrl = "https://car-rentals-5v52.onrender.com"