import { useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../../components/contextProviders/AppContextProvider";
import Container from "../../components/ui/Container";
import ProductOrderCard from "../../components/ProductOrderCard";
import Underliner from "../../components/ui/Underliner";

function ProductPage() {
  const { id } = useParams();
  const context = useContext(AppContext);
  if (!id || !context) {
    return null;
  }
  const product = context.cars.find((item) => item._id === id);
  if (!product) {
    return <p>Can't find this product</p>;
  }
  return (
    <Container>
      <ProductOrderCard
        product={product}
        userId={
          typeof context.user === "object"
            ? String(context.user._id)
            : context.user
        }
        addItemToCart={context.addItemToCart}
        initialReservation={context.initialReservation}
      />
      <div className="my-6">
        <div className="flex">
          <div>
            <Underliner fullLength thick />
            <h5 className=" font-semibold">{`Reviews(0)`}</h5>
          </div>
        </div>
        <div className="py-10">
          <p>There are no reviews yet</p>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
