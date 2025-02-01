import { AppEntities } from "common";
import React, { createContext, useEffect, useState } from "react";
import crud from "../../utils/crud";
import { carT, categoryT } from "common/src/zodSchemas";
import { backendUrl } from "../../constants";

type appContextT = {
  categories: categoryT[];
  cars: carT[];
  updateFunc: (entity: AppEntities) => void;
};
export const AppContext = createContext<null | appContextT>(null);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<appContextT["categories"]>([]);
  const [cars, setCars] = useState<appContextT["cars"]>([]);
  const [update, setUpdate] = useState<AppEntities | undefined>(undefined);
  useEffect(() => {
    //@ts-ignore
    crud.list("Category").then((res) => {
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
      //@ts-ignore
      crud.list("Category").then((res) => {
        console.log(res);
        //@ts-ignore
        setCategories(res);
      });
    update &&
      update === "Car" &&
      //@ts-ignore
      crud.list("Car").then((res) => {
        console.log(res);
        //@ts-ignore
        setCars(res);
      });
  }, [update]);
  function updateFunc(entity: AppEntities) {
    setUpdate(entity);
  }
  return (
    <AppContext.Provider value={{ categories, cars, updateFunc }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
