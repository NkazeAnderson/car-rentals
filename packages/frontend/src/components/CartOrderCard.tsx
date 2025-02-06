import { orderT } from "common/src/zodSchemas";
import React, { useContext } from "react";
import {
  AppContext,
  appContextT,
  cartItemT,
} from "./contextProviders/AppContextProvider";
import { FaCircleXmark } from "react-icons/fa6";

function CartOrderCard({
  order,
  removeItemFromCart,
}: {
  order: cartItemT;
  removeItemFromCart: appContextT["removeItemFromCart"];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="py-4 border-y border-gray-400/30">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div
            className="text-gray-700 pl-[100%] lg:pl-0 w-full lg:w-fit"
            onClick={() => {
              removeItemFromCart(order);
            }}
          >
            <FaCircleXmark />
          </div>
          <img className="size-[60px]" src={order.extras.carInfo.image} />
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between items-start">
          <h5 className=" lg:hidden block">Product</h5>
          <div>
            <p className=" text-orange-600 capitalize font-medium">
              {order.extras.carInfo.name}
            </p>
            <div className="pl-3">
              <p>
                <b>Start:</b> {order.info.start.toString()}
              </p>
              <p>
                <b>End:</b> {order.info.end.toString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between items-start">
          <h5 className=" lg:hidden block">Price</h5>
          <p>
            ${order.extras.days * order.extras.carInfo.reservationPricePerDay}
          </p>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between items-start">
          <h5 className=" lg:hidden block">Quantity</h5>
          <p>{order.quantity}</p>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between items-start">
          <h5 className=" lg:hidden block">Subtotal</h5>
          <p>
            $
            {order.extras.days *
              order.quantity *
              order.extras.carInfo.reservationPricePerDay}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartOrderCard;
