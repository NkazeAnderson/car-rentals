import React from "react";
import Container from "../../../components/ui/Container";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "../../../components/ui/ProductCard";

function CategoryProductsPage() {
  const category = "Sudan";
  return (
    <div>
      <Container>
        <h2>{category}</h2>
        <div className="border-gray-500 border-b"></div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <p>Showing 4 of 4 results</p>
          <div className=" flex space-x-2 border border-gray-700">
            <p>Sort</p>
            <BiChevronDown />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-5">
          <ProductCard
            name="Sudan 2019"
            price={200}
            image="http://localhost:3000/images/Reliable-Affordable-and-Convenient-Car-Rentals-3-1.jpg"
            id="1"
          />
        </div>
      </Container>
    </div>
  );
}

export default CategoryProductsPage;
