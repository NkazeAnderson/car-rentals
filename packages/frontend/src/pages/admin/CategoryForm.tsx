import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import { backendUrl, commonZodSchemas } from "common/src";
import Button from "../../components/ui/Button";
import axios from "axios";
import { AppContext } from "../../components/contextProviders/AppContextProvider";
import { zodResolver } from "@hookform/resolvers/zod";

function CategoryForm({ data }: { data?: commonZodSchemas.categoryT }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<commonZodSchemas.categoryT>({
    defaultValues: { _id: data?._id || "" },
    resolver: zodResolver(
      commonZodSchemas.appEntitiesSchemas.Category.omit({ _id: true })
    ),
  });
  const ref = useRef<HTMLFormElement | null>(null);
  const context = useContext(AppContext);

  const submit = async () => {
    try {
      if (!ref.current || !context) {
        throw new Error("");
      }
      const formData = new FormData(ref.current);
      const image = formData.get("image") as File;
      const secondaryImage = formData.get("secondaryImage") as File;
      if (!image.size) {
        setError("image", { message: "Required" });
        throw new Error("image");
      }
      if (!secondaryImage.size) {
        setError("secondaryImage", { message: "Required" });
        throw new Error("secondaryImage");
      }

      await axios.post(`${backendUrl}/category`, formData);
      //@ts-ignore
      context.updateFunc("Category");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case "image":
            alert("Image Required");
            break;
          case "secondaryImage":
            alert("Secondary Image Required");
            break;

          default:
            alert("An error occurred");
            break;
        }
      }
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
        <Button
          text={data ? "Update" : "Add"}
          action={handleSubmit(submit, (e) => {
            console.log(e);
          })}
          fullwidth
        />
      </div>
    </>
  );
}

export default CategoryForm;
