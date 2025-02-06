"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEntitityForcedRuntime = exports.AppEntities = void 0;
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
