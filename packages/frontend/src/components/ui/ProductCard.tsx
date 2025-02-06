import React from "react";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import { carT } from "common/src/zodSchemas";
import { useNavigate } from "react-router";

function ProductCard({ product }: { product: carT }) {
  const navigate = useNavigate();
  return (
    <div
      className="text-center hover:cursor-pointer"
      onClick={() => {
        navigate("/product/" + product._id);
      }}
    >
      <div className="h-[150px] ">
        <ImageGallery images={[product.image]} />
      </div>
      <h4>{product.name}</h4>
      <p className="text-red-800">{`$${product.reservationPricePerDay} /day`}</p>
      <div className="py-4">
        <Button text="Select Dates" />
      </div>
    </div>
  );
}

export default ProductCard;
