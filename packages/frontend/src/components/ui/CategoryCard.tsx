import React from "react";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import { categoryT } from "common/src/zodSchemas";
import { backendUrl } from "../../constants";
import { useNavigate } from "react-router";

function CategoryCard({
  category,
  lgHorizontal,
}: {
  category: categoryT;
  lgHorizontal?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col w-full mb-2 ${
        lgHorizontal &&
        "lg:flex-row lg:space-x-5 p-2 lg:p-4 lg:items-center bg-gray-300 rounded-3xl lg:mb-4"
      } `}
    >
      <div className={` h-[250px] w-full ${lgHorizontal && "lg:w-[30%]"}`}>
        <ImageGallery images={[`${category.image}`]} />
      </div>
      <div className="space-y-4 mt-3">
        <h4 className=" font-semibold text-[20px]">{category.name}</h4>
        <p>{category.description}</p>
        <Button
          text="Explore More"
          action={() => {
            navigate(`/categories/${category._id}`);
          }}
        />
      </div>
    </div>
  );
}

export default CategoryCard;
