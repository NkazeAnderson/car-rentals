import React, { useContext } from "react";
import ImageGallery from "../../components/ui/ImageGallery";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { commonZodSchemas } from "common";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import heroImg1 from "../../assets/Reliable-Affordable-and-Convenient-Car-Rentals-3-1.jpg";
import {
  AppContext,
  appContextT,
} from "../../components/contextProviders/AppContextProvider";

type rideOrderInfo<T extends commonZodSchemas.orderT["info"]> =
  T extends infer U ? (U extends { type: "Reservation" } ? U : never) : never;

function HeroSection() {
  const { setInitialReservationInfo } = useContext(AppContext) as appContextT;
  const rideFormMethods = useForm<
    rideOrderInfo<commonZodSchemas.orderT["info"]>
  >({ defaultValues: { type: "Reservation" } });
  const navigate = useNavigate();

  return (
    <div className="lg:h-[70dvh] h-[120dvh]  w-full bg-slate-600">
      <ImageGallery images={[heroImg1]} animate>
        <div className="w-full h-full bg-black/50">
          <Container fullHeight>
            <div className="flex items-center h-full flex-col py-7 lg:flex-row lg:space-x-3 space-x-0 lg:space-y-0 space-y-6">
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { duration: 2 },
                }}
                className="flex-1 text-white space-y-2"
              >
                <h1 className="text-[30px] lg:text-[50px]">
                  Reliable & Affordable Car Rentals!{" "}
                </h1>
                <p>
                  From compact cars to spacious SUVs, we provide a wide range of
                  vehicles to make your travels comfortable and hassle-free. Let
                  your journey begin with Bon Voyages!
                </p>
                <Button
                  text="Vehicle Categories"
                  action={() => {
                    navigate("/categories");
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ translateX: 50 }}
                animate={{ translateX: 0, transition: { duration: 1 } }}
                className="bg-white p-5 rounded-2xl flex-1"
              >
                <h4 className=" font-semibold pb-3">BOOK YOUR RIDE</h4>
                <p>
                  Fill in your start date and end date for your desired
                  reservation.
                </p>
                <form className=" py-4 space-y-3" action="/" method="post">
                  <Input
                    lableText="Start Date"
                    options={{ __type: "date" }}
                    registory={rideFormMethods.register("start")}
                  />
                  <Input
                    lableText="End Date"
                    options={{
                      __type: "date",
                    }}
                    registory={rideFormMethods.register("end")}
                  />
                  <div className="py-7"></div>
                </form>
                <Button
                  text="Submit & Search"
                  fullwidth
                  action={() => {
                    setInitialReservationInfo(rideFormMethods.getValues());
                    navigate("/categories");
                  }}
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </ImageGallery>
    </div>
  );
}

export default HeroSection;
