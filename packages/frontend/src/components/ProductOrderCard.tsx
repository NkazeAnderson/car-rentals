import { carT, orderT, reservationDataT } from "common/src/zodSchemas";
import React, { useEffect, useState } from "react";
import ImageGallery from "./ui/ImageGallery";
import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { getTimeDifference } from "../utils";
import { appContextT, cartItemT } from "./contextProviders/AppContextProvider";
import { useNavigate } from "react-router";

function ProductOrderCard({
  product,
  userId,
  addItemToCart,
  initialReservation,
}: {
  product: carT;
  addItemToCart: appContextT["addItemToCart"];
  userId?: string;
  initialReservation?: reservationDataT;
}) {
  const reservationForm = useForm<reservationDataT>({
    defaultValues: initialReservation || { type: "Reservation" },
  });
  const navigate = useNavigate();
  const orderForm = useForm<orderT>({ defaultValues: { quantity: 1 } });
  const qty = orderForm.watch("quantity");
  const { start, end } = reservationForm.watch();
  let days = 0;
  if (start && end) {
    days = getTimeDifference(start.toString(), end.toString());
  }
  const price = qty * days * product.reservationPricePerDay;

  const finalOrder: cartItemT = {
    _id: "",
    userId: userId || "",
    carId: product._id,
    quantity: qty,
    info: reservationForm.getValues(),
    extras: {
      carInfo: product,
      days,
      addedAt: new Date().getTime(),
    },
  };

  return (
    <div className="w-full items-start colSmColLg lg:space-x-6">
      <div className="flex-1 h-[60vh]">
        <ImageGallery images={[product.image]} />
      </div>
      <div className="flex-1">
        <h2 className="text-black text-[48px] capitalize">{product.name}</h2>
        <h3 className="text-red-600">
          ${product.reservationPricePerDay} / day
        </h3>
        <div className="py-3">
          <Input
            lableText="Start"
            registory={reservationForm.register("start")}
            options={{ __type: "date" }}
          />
          <Input
            lableText="End"
            registory={reservationForm.register("end")}
            options={{ __type: "date" }}
          />
        </div>
        {Boolean(days) && (
          <div className="py-2">
            <div className="py-2">
              <p
                className=" text-orange-600 py-2 underline hover:cursor-pointer inline-block"
                onClick={() => {
                  reservationForm.reset();
                  orderForm.reset();
                }}
              >
                Clear dates
              </p>
              <p>
                Total booking duration: {days} day{days > 1 ? "s" : ""}
              </p>
            </div>
            <h3 className="py-3 text-red-600">${price} </h3>
          </div>
        )}
        <div className="flex">
          <div className="w-1/6 md:w-1/12">
            <Input
              registory={orderForm.register("quantity")}
              options={{ __type: "number" }}
            />
          </div>
          <div className="flex-grow">
            <Button
              text="Add to cart"
              fullwidth
              pending={!Boolean(days)}
              action={() => {
                addItemToCart(finalOrder);
                orderForm.reset();
                reservationForm.reset();
                navigate("/cart");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOrderCard;
