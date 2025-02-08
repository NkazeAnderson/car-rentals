import React, { useContext } from "react";
import Container from "../../../components/ui/Container";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "../../../components/ui/ProductCard";
import { Link, useParams } from "react-router";
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

  if (!products.length) {
    return (
      <Container>
        <div className="w-full h-[85vh] flex items-center justify-center">
          <p>
            Can't find available cars in this category. Please try out our{" "}
            <Link to="/categories" className="text-orange-600">
              other categories
            </Link>
          </p>
        </div>
      </Container>
    );
  }
  return (
    <div>
      <Container>
        <h2 className=" capitalize">{category.name.toLocaleLowerCase()}</h2>
        <div className="border-gray-500 border-b"></div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <p>
            Showing {products.length} {products.length > 1 ? "cars" : "car"}
          </p>
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
