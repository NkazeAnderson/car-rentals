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
        "lg:flex-row lg:space-x-11 p-2 lg:p-4 lg:items-center bg-gray-300 rounded-3xl lg:mb-4"
      } `}
    >
      <div className={` h-[250px] w-full ${lgHorizontal && "flex-[1]"}`}>
        <ImageGallery images={[`${category.image}`]} />
      </div>
      <div className="space-y-4 mt-3 flex-[2]">
        <h4 className=" font-semibold text-[20px] capitalize">
          {category.name}
        </h4>
        <p className=" first-letter:capitalize">{category.description}</p>
        <Button
          text="Book Now"
          action={() => {
            navigate(`/categories/${category._id}`);
          }}
        />
      </div>
    </div>
  );
}

export default CategoryCard;
