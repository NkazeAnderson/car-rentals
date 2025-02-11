import { useContext } from "react";
import Underliner from "../../components/ui/Underliner";
import { CiCircleCheck } from "react-icons/ci";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import {
  AppContext,
  appContextT,
} from "../../components/contextProviders/AppContextProvider";
import CartOrderCard from "../../components/CartOrderCard";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { useNavigate } from "react-router";

function CartPage() {
  const { cart, removeItemFromCart } = useContext(AppContext) as appContextT;
  const navigate = useNavigate();
  // const [updateOrderQty, setupdateOrderQty] = useState<
  //   { [carId: string]: number }[]
  // >(() => cart.map((item) => ({ [String(item.carId)]: item.quantity })));
  const { register } = useForm<{ coupon: string }>();
  const recentlyAddedProduct = cart.find(
    (item) => item.extras.addedAt + 10 * 1000 > new Date().getDate()
  );

  return (
    <Container>
      <h1>Cart</h1>
      <div className="bg-gray-600 px-4 pb-4 my-2">
        <Underliner fullLength thick />
        {recentlyAddedProduct && (
          <div className="flex py-2 items-center space-y-2 lg:space-y-0 justify-between flex-col lg:flex-row">
            <div className="flex items-center space-x-2">
              <CiCircleCheck className="text-orange-700 text-[36px]" />
              <p>
                {" "}
                {`${recentlyAddedProduct.extras.carInfo.name} has been added to cart`}
              </p>
            </div>
            <Button
              text="Continue Shopping"
              action={() => {
                navigate(
                  "/categories/" +
                    recentlyAddedProduct.extras.carInfo.categoryId
                );
              }}
            />
          </div>
        )}
      </div>
      {cart.length ? (
        <>
          <div className="lg:grid grid-cols-5 py-3 bg-gray-400/50 my-4 hidden">
            <div></div>
            <div>
              <h5>Product</h5>
            </div>
            <div>
              <h5>Price</h5>
            </div>
            <div>
              <h5>Quantity</h5>
            </div>
            <div>
              <h5>Subtotal</h5>
            </div>
          </div>
          <div>
            {cart.map((item) => (
              <CartOrderCard
                key={item.carId as string}
                order={item}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </div>
          <div className="colSmColLg justify-between items-center">
            <div className="flex items-center flex-col lg:flex-row space-x-0 space-y-0">
              <Input
                registory={register("coupon")}
                options={{ __type: "text" }}
                placeholder="Coupon code"
              />
              <Button text="Apply Coupon" />
            </div>
            <Button text="Update Cart" />
          </div>
          <div className="grid my-8 grid-cols-1 lg:grid-cols-2">
            <div className=" hidden lg:block"></div>
            <div>
              <h1>Cart totals</h1>
              <div className=" py-5">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>
                    {" "}
                    $
                    {cart.reduce((prev, item) => {
                      return (
                        item.quantity *
                          item.extras.days *
                          item.extras.carInfo.reservationPricePerDay +
                        prev
                      );
                    }, 0)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total</p>
                  <p>
                    {" "}
                    $
                    {cart.reduce((prev, item) => {
                      return (
                        item.quantity *
                          item.extras.days *
                          item.extras.carInfo.reservationPricePerDay +
                        prev
                      );
                    }, 0)}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  text="Proceed to checkout"
                  fullwidth
                  action={() => {
                    navigate("/checkout");
                  }}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="my-2">
          <div className="flex items-center space-x-2 font-light my-4">
            <BiCalendar className="text-orange-600" />{" "}
            <p>Your Cart is currently empty</p>
          </div>
          <Button
            text="Return to categories"
            action={() => {
              navigate("/categories");
            }}
          />
        </div>
      )}
    </Container>
  );
}

export default CartPage;
