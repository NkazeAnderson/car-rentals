import React from "react";
import Button from "./Button";
import ImageGallery from "./ImageGallery";

function ProductCard({
  name,
  price,
  id,
  image,
}: {
  name: string;
  price: number;
  id: string;
  image: string;
}) {
  return (
    <div className="text-center">
      <div className="h-[150px] ">
        <ImageGallery images={[image]} />
      </div>
      <h4>{name}</h4>
      <p className="text-red-800">{`$${price} /night`}</p>
      <div className="py-4">
        <Button text="Select Dates" />
      </div>
    </div>
  );
}

export default ProductCard;
