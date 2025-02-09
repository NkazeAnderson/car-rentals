import React, { useContext, useState } from "react";
import Underliner from "../../components/ui/Underliner";
import { CiCircleCheck } from "react-icons/ci";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import {
  AppContext,
  appContextT,
} from "../../components/contextProviders/AppContextProvider";
import CartOrderCard from "../../components/CartOrderCard";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { useNavigate } from "react-router";
import UserInfoForm from "./UserInfoForm";
import { userSchema, userT } from "common/src/zodSchemas";
import crud from "../../utils/crud";
import { AppEntities } from "common/src";
import { zodResolver } from "@hookform/resolvers/zod";
import { getZodIgnoreList } from "../../utils";

function CheckoutPage() {
  const {
    cart,
    removeItemFromCart,
    user,
    setUserInfo,
    updateFunc,
    setInitialReservationInfo,
  } = useContext(AppContext) as appContextT;
  const [userId, setuserId] = useState("");
  const navigate = useNavigate();
  if (!cart.length) {
    setTimeout(() => {
      navigate("/categories");
    }, 1000);
  }
  const orderForm = useForm<{ orderNote: string }>();
  const userInfoForm = useForm<userT>({
    defaultValues: user,
    //@ts-ignore
    resolver: zodResolver(userSchema.omit(getZodIgnoreList(AppEntities.User))),
  });
  async function addUserDb(user: userT) {
    try {
      const { id } = await crud.create(user, AppEntities.User);
      setUserInfo({ ...user, _id: id });
      localStorage.setItem("userId", id);
      setuserId(id);
      updateFunc(AppEntities.User);
      cart.forEach((_, index) => {
        cart[index].userId = id;
      });
      const { orderNote } = orderForm.getValues();
      if (orderNote) {
        cart.forEach((_, index) => {
          cart[index].notes = orderNote;
        });
      }
      for (let order of cart) {
        await crud.create(order, AppEntities.Order);
        removeItemFromCart(order);
      }
      userInfoForm.reset();
      setInitialReservationInfo(undefined);
      return id;
    } catch (error) {
      console.log(error);
      alert("An error occured");
    }
  }

  return (
    <Container>
      <h1>Checkout</h1>
      <div className="bg-gray-600 px-4 pb-4 my-2">
        <Underliner fullLength thick />
        <div className="flex py-2 items-center space-y-2 lg:space-y-0 justify-between flex-col lg:flex-row">
          <div className="flex items-center space-x-2">
            <CiCircleCheck className="text-orange-700 text-[36px]" />
            <p>
              {`Have a coupon?`} <span>clich here to enter your code</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-4/6 p-4">
          <div className=""></div>
          <UserInfoForm form={userInfoForm} />
          <div className="py-5">
            <h4>Additional information</h4>
            <div>
              <Input
                registory={orderForm.register("orderNote")}
                options={{ __type: "textArea" }}
                placeholder="Notes about your order"
              />
            </div>
          </div>
        </div>
        <div className="w-2/6 border border-gray-400/30 p-4">
          <h3>Your Order</h3>
          <div className="flex justify-between items-center py-2">
            <h5>Product</h5>
            <h5>Subtotal</h5>
          </div>
          {cart.map((item) => (
            <div
              key={item.carId as string}
              className="flex justify-between items-center py-2 border-y border-gray-400/30"
            >
              <p>{item.extras.carInfo.name}</p>
              <div className="flex items-center space-x-2">
                <p>x{item.quantity}</p>{" "}
                <div>
                  <p>
                    <b>Start:</b> {item.info.start.toString()}
                  </p>
                  <p>
                    <b>End:</b> {item.info.end.toString()}
                  </p>{" "}
                </div>
              </div>
              <p>
                $
                {item.extras.carInfo.reservationPricePerDay *
                  item.extras.days *
                  item.quantity}
              </p>
            </div>
          ))}
          <div className="flex justify-between items-center py-2">
            <h5>Subtotal</h5>
            <p>
              $
              {cart.reduce((prev, item) => {
                return (
                  item.quantity *
                    item.extras.days *
                    item.extras.carInfo.reservationPricePerDay +
                  prev
                );
              }, 0)}
            </p>
          </div>
          <div className="flex justify-between items-center py-2">
            <h5>Total</h5>
            <p>
              $
              {cart.reduce((prev, item) => {
                return (
                  item.quantity *
                    item.extras.days *
                    item.extras.carInfo.reservationPricePerDay +
                  prev
                );
              }, 0)}
            </p>
          </div>
          <p className=" text-[12px] font-light py-2">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our Privacy policy.
          </p>
          <div className="py-3">
            <Button
              text="Place Order"
              fullwidth
              action={userInfoForm.handleSubmit(addUserDb)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CheckoutPage;
