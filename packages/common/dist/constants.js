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
    email: "test@gmail.com",
    phone: "77377373",
    address: "asad, ny, 3663",
    facebook: "/",
    instagram: "/",
    twitter: "/"
};
exports.backendUrl = "https://car-rentals-backend-2r6l.onrender.com";
exports.frontendUrl = "https://car-rentals-5v52.onrender.com";
