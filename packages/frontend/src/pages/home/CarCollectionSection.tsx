import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import ImageGallery from "../../components/ui/ImageGallery";
import { AppContext } from "../../components/contextProviders/AppContextProvider";
import { trimArray } from "../../utils";
import { useNavigate } from "react-router";
import { categoryT } from "common/src/zodSchemas";

function CarCollectionSection() {
  const context = useContext(AppContext);

  if (!context || !context.categories.length) {
    return null;
  }

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {trimArray(context.categories, 8).map((item) => (
            <CarCollection category={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CarCollection({ category }: { category: categoryT }) {
  const [showOverLay, setShowOverLay] = useState(false);
  const naviigate = useNavigate();
  return (
    <div
      className="h-[150px]"
      onMouseLeave={() => {
        setShowOverLay(false);
      }}
      onMouseEnter={() => {
        setShowOverLay(true);
      }}
    >
      <ImageGallery images={[category.secondaryImage]}>
        <div
          className={`border-2 w-full h-full ${
            showOverLay ? "block" : "hidden"
          }`}
          onClick={() => {
            naviigate("/categories/" + category._id);
          }}
        >
          <div className="flex flex-col h-full items-center justify-center my-auto border-white bg-black/50 ">
            <h4 className="text-center capitalize text-white text-[20px] font-bold">
              {category.name}
            </h4>
            <p className="text-center capitalize text-slate-500 font-medium">
              From 2
            </p>
          </div>
        </div>
      </ImageGallery>
    </div>
  );
}

export default CarCollectionSection;
