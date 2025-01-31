import { z } from "zod";
import { extendZod, zId } from "@zodyac/zod-mongoose";
import { AppEntities } from "./constants";
extendZod(z);
const baseString = z.coerce.string().trim().toLowerCase().nonempty()
const baseNumber = z.coerce.number()

export const locationSchema = z.object({
    formatedName:baseString,
    lng:baseNumber,
    lat:baseNumber
})
export type locationT = z.infer<typeof locationSchema>

export const categorySchema = z.object({
    _id:zId(),
    name:baseString,
    description:baseString,
    image:baseString,
    secondaryImage:baseString
})
export type categoryT = z.infer<typeof categorySchema>

export const carSchema = z.object({
    _id:zId(),
    categoryId:zId(AppEntities.Category),
    description:baseString,
    name:baseString,
    image:baseString,
    available:z.boolean().optional(),
    reservationPricePerDay:baseNumber.positive(),
    ridePricePerKm:baseNumber,
    location:locationSchema.optional()
})
export type carT = z.infer<typeof carSchema>

export const userSchema = z.object({
    _id:zId(),
    firstName:baseString,
    lastName:baseString,
    email:baseString.email(),
    phone:baseString.min(8)
})
export type userT = z.infer<typeof userSchema>

export const rideData= z.object({
    type:z.literal("Ride"),
    start:locationSchema,
    end:locationSchema,
    date:z.date(),
})

export const reservationData= z.object({
    type:z.literal("Reservation"),
    start:z.date(),
    end:z.date()
})

export const orderSchema = z.object({
    _id:zId(),
    carId:zId(AppEntities.Car),
    price:baseNumber.positive(),
    userId:zId(AppEntities.User),
    info:z.union([reservationData, rideData])
})
export type orderT = z.infer<typeof orderSchema>

export const appEntitiesSchemas = { 
    [AppEntities.Car]: carSchema,
    [AppEntities.Category]: categorySchema,
    [AppEntities.Order]: orderSchema,
    [AppEntities.User]: userSchema
}

