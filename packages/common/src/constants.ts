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
    email: "info@bonvoyagecarrentals.com",
    phone:"7512365412",
    address:"213 West Side, Bronx, NY, 13663",
    facebook:"/",
    instagram:"/",
    twitter:"/"
   }

export const backendUrl = "https://car-rentals-backend-2r6l.onrender.com"
export const frontendUrl = "https://car-rentals-5v52.onrender.com"