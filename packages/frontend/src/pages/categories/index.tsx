import React from "react";
import CategoryCard from "../../components/ui/CategoryCard";
import Container from "../../components/ui/Container";
import ImageGallery from "../../components/ui/ImageGallery";
import headerImage from "../../assets/vehicle-catgeory-banner.jpg";
import { FaFacebook } from "react-icons/fa";

function CategoriesPage() {
  return (
    <div>
      <div className="pb-10 h-[40vh]">
        <ImageGallery images={[headerImage]}>
          <div className="bg-black/70 w-full h-full text-white flex flex-col justify-center items-center px-12">
            <h2>
              From Economy To Luxury, We Have A Wide Range Of Vehicles For You.
              Explore Now.
            </h2>
            <div className="flex space-x-3 text-[50px]">
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
            </div>
          </div>
        </ImageGallery>
      </div>
      <Container>
        <CategoryCard lgHorizontal />
        <CategoryCard lgHorizontal />
        <CategoryCard lgHorizontal />
      </Container>
    </div>
  );
}

export default CategoriesPage;
