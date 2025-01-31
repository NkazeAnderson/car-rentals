import React from "react";
import { useForm } from "react-hook-form";
import Input, { SubmitButton } from "../../components/ui/Input";
import { commonZodSchemas } from "common";

function CategoryForm({ data }: { data?: commonZodSchemas.categoryT }) {
  const { register } = useForm<commonZodSchemas.categoryT>({
    defaultValues: { _id: data?._id || "679a85ac9d12609292ae2390" },
  });
  return (
    <form
      action="http://localhost:3000/category"
      method="post"
      encType="multipart/form-data"
    >
      <div>
        <Input
          lableText="Name"
          registory={register("name")}
          options={{ __type: "text" }}
        />
      </div>
      <div>
        <Input
          lableText="Description"
          registory={register("description")}
          options={{ __type: "textArea" }}
        />
      </div>
      <div>
        <Input
          lableText="Main Image"
          registory={register("image")}
          options={{ __type: "file" }}
        />
      </div>
      <div>
        <Input
          lableText="Model Image"
          registory={register("secondaryImage")}
          options={{ __type: "file" }}
        />
      </div>
      <div className="py-3">
        <SubmitButton text={data ? "Update" : "Add"} />
      </div>
    </form>
  );
}

export default CategoryForm;
