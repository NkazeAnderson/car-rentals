import React from "react";
import ImageGallery from "../../components/ui/ImageGallery";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { commonZodSchemas } from "common";
import { useForm } from "react-hook-form";

type rideOrderInfo<T extends commonZodSchemas.orderT["info"]> =
  T extends infer U ? (U extends { type: "Ride" } ? U : never) : never;

function HeroSection() {
  const rideFormMethods =
    useForm<rideOrderInfo<commonZodSchemas.orderT["info"]>>();
  return (
    <div className="lg:h-[70dvh] h-[90dvh]  w-full bg-slate-600">
      <ImageGallery
        images={[
          "http://localhost:3000/images/Reliable-Affordable-and-Convenient-Car-Rentals-3-1.jpg",
        ]}
      >
        <div className="w-full h-full bg-black/50">
          <Container fullHeight>
            <div className="flex items-center h-full flex-col lg:flex-row lg:space-x-3 space-x-0 lg:space-y-0 space-y-6">
              <div className="flex-1 text-white space-y-2">
                <h1 className="text-[30px] lg:text-[50px]">
                  Reliable & Affordable Car Rentals!{" "}
                </h1>
                <p>
                  From compact cars to spacious SUVs, we provide a wide range of
                  vehicles to make your travels comfortable and hassle-free. Let
                  your journey begin with Bon Voyages!
                </p>
                <Button text="Vehicle Categories" />
              </div>
              <div className="bg-white p-5 rounded-2xl flex-1">
                <h4 className=" font-semibold pb-3">BOOK YOUR RIDE</h4>
                <p>Fill In The Form To Book Your Ride</p>
                <form className=" py-4 space-y-3" action="/" method="post">
                  <Input
                    lableText="Pick Up Date"
                    options={{ __type: "date" }}
                    registory={rideFormMethods.register("date")}
                  />
                  <Input
                    lableText="Pick Up Location"
                    options={{
                      __type: "select",
                      options: ["Address1, NY, 29992"],
                    }}
                    registory={rideFormMethods.register("start.formatedName")}
                  />
                  <Input
                    lableText="Drop Off Location"
                    options={{
                      __type: "select",
                      options: ["Address2, NJ, 29992"],
                    }}
                    registory={rideFormMethods.register("end.formatedName")}
                  />
                  <Button text="Submit & Search" fullwidth />
                </form>
              </div>
            </div>
          </Container>
        </div>
      </ImageGallery>
    </div>
  );
}

export default HeroSection;
