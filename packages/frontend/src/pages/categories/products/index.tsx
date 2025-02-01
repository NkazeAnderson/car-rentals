import React, { useContext } from "react";
import Container from "../../../components/ui/Container";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "../../../components/ui/ProductCard";
import { useParams } from "react-router";
import { AppContext } from "../../../components/contextProviders/AppContextProvider";

function CategoryProductsPage() {
  const { id } = useParams();
  const context = useContext(AppContext);
  if (!id || !context) {
    return null;
  }
  const category = context.categories.find((item) => item._id == id);
  if (!category) {
    return <p>Category does not exist</p>;
  }
  const products = context.cars.filter((item) => item.categoryId === id);
  return (
    <div>
      <Container>
        <h2 className=" capitalize">{category.name.toLocaleLowerCase()}</h2>
        <div className="border-gray-500 border-b"></div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <p>Showing 4 of 4 results</p>
          <div className=" flex space-x-2 border border-gray-700">
            <p>Sort</p>
            <BiChevronDown />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-5">
          {products.map((item) => (
            <ProductCard key={String(item._id)} product={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategoryProductsPage;
