import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import { commonZodSchemas } from "common";
import Button from "../../components/ui/Button";
import axios from "axios";
import { backendUrl } from "../../constants";
import { AppContext } from "../../components/contextProviders/AppContextProvider";

function CategoryForm({ data }: { data?: commonZodSchemas.categoryT }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<commonZodSchemas.categoryT>({
    defaultValues: { _id: data?._id || "" },
    // resolver: zodResolver(
    //   commonZodSchemas.appEntitiesSchemas.Category.omit({ _id: true })
    // ),
  });
  const ref = useRef<HTMLFormElement | null>(null);
  const context = useContext(AppContext);

  const submit = async (data: commonZodSchemas.categoryT) => {
    try {
      if (!ref.current || !context) {
        throw new Error("");
      }
      const formData = new FormData(ref.current);
      const res = await axios.post(`${backendUrl}/category`, formData);
      //@ts-ignore
      context.updateFunc("Category");
      reset();
    } catch (error) {
      alert("An error occurred");
    }
  };

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
            lableText="Model Image"
            registory={register("secondaryImage")}
            options={{ __type: "file" }}
            error={errors.secondaryImage?.message}
          />
        </div>
      </form>
      <div className="py-3">
        <Button text={data ? "Update" : "Add"} action={handleSubmit(submit)} />
      </div>
    </>
  );
}

export default CategoryForm;
