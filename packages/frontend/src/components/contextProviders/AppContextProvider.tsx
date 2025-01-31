import { AppEntities } from "common";
import React, { createContext, useEffect, useState } from "react";
import crud from "../../utils/crud";
import { categoryT } from "common/src/zodSchemas";

type appContextT = {
  categories: categoryT[];
  cars: categoryT[];
};
export const AppContext = createContext<null | appContextT>(null);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<appContextT["categories"]>([]);
  const [cars, setCars] = useState<appContextT["cars"]>([]);
  useEffect(() => {
    //@ts-ignore
    crud.list("Category").then((res) => {
      console.log(res);
      //@ts-ignore
      setCategories(res);
    });
    //@ts-ignore
    crud.list("Car").then((res) => {
      console.log(res);
      //@ts-ignore
      setCars(res);
    });
  }, []);
  return (
    <AppContext.Provider value={{ categories, cars }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
