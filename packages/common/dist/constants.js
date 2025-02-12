"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontendUrl = exports.backendUrl = exports.contactInfo = exports.AppEntitityForcedRuntime = exports.AppEntities = void 0;
var AppEntities;
(function (AppEntities) {
    AppEntities["Category"] = "Category";
    AppEntities["Car"] = "Car";
    AppEntities["User"] = "User";
    AppEntities["Order"] = "Order";
})(AppEntities || (exports.AppEntities = AppEntities = {}));
exports.AppEntitityForcedRuntime = {
    [AppEntities.Category]: AppEntities.Category,
    [AppEntities.Car]: AppEntities.Car,
    [AppEntities.Order]: AppEntities.Order,
    [AppEntities.User]: AppEntities.User,
};
exports.contactInfo = {
    email: "info@bonvoyagecarrentals.com",
    phone: "7512365412",
    address: "213 West Side, Bronx, NY, 13663",
    facebook: "/",
    instagram: "/",
    twitter: "/"
};
exports.backendUrl = "https://car-rentals-backend-2r6l.onrender.com";
exports.frontendUrl = "https://car-rentals-5v52.onrender.com";
