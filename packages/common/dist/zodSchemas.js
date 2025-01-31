"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appEntitiesSchemas = exports.reservationData = exports.rideData = exports.locationSchema = void 0;
const zod_1 = require("zod");
const zod_mongoose_1 = require("@zodyac/zod-mongoose");
const constants_1 = require("./constants");
(0, zod_mongoose_1.extendZod)(zod_1.z);
const baseString = zod_1.z.coerce.string().trim().toLowerCase().nonempty();
const baseNumber = zod_1.z.coerce.number();
exports.locationSchema = zod_1.z.object({
    formatedName: baseString,
    lng: baseNumber,
    lat: baseNumber
});
const categorySchema = zod_1.z.object({
    _id: (0, zod_mongoose_1.zId)(),
    name: baseString,
    description: baseString,
    image: baseString,
    secondaryImage: baseString
});
const carSchema = zod_1.z.object({
    _id: (0, zod_mongoose_1.zId)(),
    categoryId: (0, zod_mongoose_1.zId)(constants_1.AppEntities.Category),
    description: baseString,
    image: baseString,
    available: zod_1.z.boolean().optional(),
    reservationPricePerDay: baseNumber.positive(),
    ridePricePerKm: baseNumber,
    location: exports.locationSchema
});
const userSchema = zod_1.z.object({
    _id: (0, zod_mongoose_1.zId)(),
    firstName: baseString,
    lastName: baseString,
    email: baseString.email(),
    phone: baseString.min(8)
});
exports.rideData = zod_1.z.object({
    type: zod_1.z.literal("Ride"),
    start: exports.locationSchema,
    end: exports.locationSchema,
    date: zod_1.z.date(),
});
exports.reservationData = zod_1.z.object({
    type: zod_1.z.literal("Reservation"),
    start: zod_1.z.date(),
    end: zod_1.z.date()
});
const orderSchema = zod_1.z.object({
    _id: (0, zod_mongoose_1.zId)(),
    carId: (0, zod_mongoose_1.zId)(constants_1.AppEntities.Car),
    price: baseNumber.positive(),
    userId: (0, zod_mongoose_1.zId)(constants_1.AppEntities.User),
    info: zod_1.z.union([exports.reservationData, exports.rideData])
});
exports.appEntitiesSchemas = {
    [constants_1.AppEntities.Car]: carSchema,
    [constants_1.AppEntities.Category]: categorySchema,
    [constants_1.AppEntities.Order]: orderSchema,
    [constants_1.AppEntities.User]: userSchema
};
