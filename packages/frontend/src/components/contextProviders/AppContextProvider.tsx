import { AppEntities } from "common/src";
import React, { createContext, useEffect, useState } from "react";
import crud from "../../utils/crud";
import { carT, categoryT, orderT, userT } from "common/src/zodSchemas";
import { backendUrl } from "../../constants";

export type cartItemT = orderT & {
  extras: { carInfo: carT; days: number; addedAt: number };
};
export type appContextT = {
  categories: categoryT[];
  cars: carT[];
  updateFunc: (entity: AppEntities) => void;
  cart: cartItemT[];
  addItemToCart: (order: cartItemT) => void;
  removeItemFromCart: (order: cartItemT) => void;
  user?: userT;
  setUserInfo: (user: userT) => void;
};
export const AppContext = createContext<null | appContextT>(null);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<appContextT["user"]>(undefined);
  const [categories, setCategories] = useState<appContextT["categories"]>([]);
  const [cars, setCars] = useState<appContextT["cars"]>([]);
  const [cart, setCart] = useState<appContextT["cart"]>([]);
  const [update, setUpdate] = useState<AppEntities | undefined>(undefined);
  function addItemToCart(order: cartItemT) {
    setCart((prev) => {
      const existingOrderIndex = prev.findIndex(
        (item) => item.carId === order.carId
      );
      if (existingOrderIndex >= 0) {
        prev[existingOrderIndex] = order;
      } else {
        prev.push(order);
      }
      return [...prev];
    });
  }
  function removeItemFromCart(order: cartItemT) {
    setCart((prev) => {
      return prev.filter((item) => item.carId !== order.carId);
    });
  }
  function setUserInfo(user: userT) {
    setUser(user);
  }
  useEffect(() => {
    crud.list(AppEntities.Category).then((res) => {
      console.log(res);
      if (Array.isArray(res)) {
        res = res.map((item) => {
          item.image = `${backendUrl}/images/${item.image}`;
          item.secondaryImage = `${backendUrl}/images/${item.secondaryImage}`;
          return item;
        });
      }
      setCategories(res);
    });
    //@ts-ignore
    crud.list("Car").then((res) => {
      console.log(res);
      if (Array.isArray(res)) {
        res = res.map((item) => {
          item.image = `${backendUrl}/images/${item.image}`;
          return item;
        });
      }
      setCars(res);
    });
  }, []);
  useEffect(() => {
    update &&
      update === "Category" &&
      crud.list(AppEntities.Category).then((res) => {
        console.log(res);
        //@ts-ignore
        setCategories(res);
      });
    update &&
      update === "Car" &&
      crud.list(AppEntities.Car).then((res) => {
        console.log(res);
        //@ts-ignore
        setCars(res);
      });
  }, [update]);

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  function updateFunc(entity: AppEntities) {
    setUpdate(entity);
  }
  return (
    <AppContext.Provider
      value={{
        categories,
        cars,
        updateFunc,
        cart,
        removeItemFromCart,
        addItemToCart,
        user,
        setUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
