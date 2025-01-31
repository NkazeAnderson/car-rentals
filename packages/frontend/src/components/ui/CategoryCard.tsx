import React from "react";
import ImageGallery from "./ImageGallery";
import Button from "./Button";

function CategoryCard({ lgHorizontal }: { lgHorizontal?: boolean }) {
  return (
    <div
      className={`flex flex-col w-full ${
        lgHorizontal &&
        "lg:flex-row space-x-5 p-2 lg:p-4 items-center bg-gray-300 rounded-3xl lg:mb-4"
      } `}
    >
      <div className=" h-[250px]">
        <ImageGallery
          images={[
            "http://localhost:3000/images/Reliable-Affordable-and-Convenient-Car-Rentals-3-1.jpg",
          ]}
        />
      </div>
      <div className="space-y-4 mt-3">
        <h4 className=" font-semibold text-[20px]">Luxury Car Rentals</h4>
        <p>
          We at Bon Voyages Car Rental offer luxurious cars for every traveler,
          whether you're heading on a holiday, a work trip, or a mix of both. We
          have the perfect car for your needs, whether it's a large SUV or a
          compact one.{" "}
        </p>
        <Button text="Explore More" />
      </div>
    </div>
  );
}

export default CategoryCard;
