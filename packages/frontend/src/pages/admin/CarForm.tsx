import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import { commonZodSchemas } from "common";
import Button from "../../components/ui/Button";
import axios from "axios";
import { backendUrl } from "../../constants";
import { AppContext } from "../../components/contextProviders/AppContextProvider";

function CarForm({ data }: { data?: commonZodSchemas.carT }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<commonZodSchemas.carT>({
    defaultValues: {
      _id: data?._id || "",
      //   location: { formatedName: "jjshhs", lat: 7777, lng: 999 },
    },
    // resolver: zodResolver(
    //   commonZodSchemas.appEntitiesSchemas.Category.omit({ _id: true })
    // ),
  });
  const ref = useRef<HTMLFormElement | null>(null);
  const context = useContext(AppContext);
  const submit = async (data: commonZodSchemas.carT) => {
    try {
      if (!ref.current || !context) {
        throw new Error("");
      }
      const formData = new FormData(ref.current);
      const category = context.categories.find(
        (item) => item.name === data.categoryId
      );

      if (!category) {
        throw new Error("");
      }
      formData.set("categoryId", category._id as string);
      const res = await axios.post(`${backendUrl}/car`, formData);
      //@ts-ignore
      context.updateFunc("Car");
      reset();
    } catch (error) {
      alert("An error occurred");
    }
  };
  if (!context) {
    return null;
  }

  return (
    <>
      <form
        ref={(htmlref) => {
          ref.current = htmlref;
        }}
      >
        <div>
          <Input
            lableText="Name"
            registory={register("name")}
            options={{ __type: "text" }}
            error={errors.name?.message}
          />
        </div>
        <div>
          <Input
            lableText="Description"
            registory={register("description")}
            options={{ __type: "textArea" }}
            error={errors.description?.message}
          />
        </div>
        <div>
          <Input
            lableText="Main Image"
            registory={register("image")}
            options={{ __type: "file" }}
            error={errors.image?.message}
          />
        </div>
        <div>
          <Input
            lableText="Category"
            registory={register("categoryId")}
            options={{
              __type: "select",
              options: context.categories.map((item) => item.name),
            }}
            error={errors.categoryId?.message}
          />
        </div>
        <div>
          <Input
            lableText="Price Per Day"
            registory={register("reservationPricePerDay")}
            options={{ __type: "number" }}
            error={errors.reservationPricePerDay?.message}
          />
        </div>
        <div>
          <Input
            lableText="Price Per Km"
            registory={register("ridePricePerKm")}
            options={{ __type: "number" }}
            error={errors.reservationPricePerDay?.message}
          />
        </div>
      </form>
      <div className="py-3">
        <Button text={data ? "Update" : "Add"} action={handleSubmit(submit)} />
      </div>
    </>
  );
}

export default CarForm;
