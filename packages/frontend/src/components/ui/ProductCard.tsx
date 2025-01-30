import React from "react";
import ImageGallery from "./ImageGallery";
import Button from "./Button";

function ProductCard() {
  return (
    <div className="flex flex-col w-full">
      <div className=" h-[250px]">
        <ImageGallery
          images={[
            "http://localhost:3000/images/Reliable-Affordable-and-Convenient-Car-Rentals-3-1.jpg",
          ]}
        />
      </div>
      <div>
        <h4>name</h4>
        <p>Description</p>
        <Button text="Button" />
      </div>
    </div>
  );
}

export default ProductCard;
