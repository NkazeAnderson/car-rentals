import React from "react";
import Container from "../../components/ui/Container";
import ImageGallery from "../../components/ui/ImageGallery";

function CarCollectionSection() {
  return (
    <div>
      <div className="bg-gray-900 py-3">
        <Container>
          <h2 className="text-white font-bold text-[24px]">
            Your Dream Car Collection
          </h2>
        </Container>
      </div>
      <div className="py-8 px-4">
        <div className="grid grid-cols-4 grid-rows-2">
          <ImageGallery
            images={[
              "http://localhost:3000/images/Reliable-Affordable-and-Convenient-Car-Rentals-3-1.jpg",
            ]}
          >
            <div className="border-2 w-full h-full">
              <div className="flex flex-col h-full items-center justify-center my-auto border-white bg-black/50 ">
                <h5 className="text-center capitalize text-white text-[20px] font-bold">
                  sedan
                </h5>
                <p className="text-center capitalize text-slate-500 font-medium">
                  from 2
                </p>
              </div>
            </div>
          </ImageGallery>
        </div>
      </div>
    </div>
  );
}

export default CarCollectionSection;
