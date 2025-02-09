import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import Underliner from "../../components/ui/Underliner";
import CategoryForm from "./CategoryForm";
import CarForm from "./CarForm";
import {
  AppContext,
  appContextT,
  cartItemT,
} from "../../components/contextProviders/AppContextProvider";
import crud from "../../utils/crud";
import { AppEntities } from "common/src";
import { carT, orderT, userT } from "common/src/zodSchemas";
import { backendUrl } from "../../constants";
import { useNavigate } from "react-router";
import { getTimeDifference } from "../../utils";

function AdminPage() {
  const [orders, setOrders] = useState<orderT[]>([]);
  const [ordersWithInfo, setOrdersWithInfo] = useState<
    (orderT & { car: carT; user: userT })[]
  >([]);
  const [users, setUsers] = useState<userT[]>([]);
  const { cars, categories, user } = useContext(AppContext) as appContextT;
  async function getOrders() {
    const orders = await crud.list(AppEntities.Order);
    setOrders(orders);
  }
  async function getUsers() {
    const users = await crud.list(AppEntities.User);
    setUsers(users);
  }
  const navigate = useNavigate();
  useEffect(() => {
    getUsers().then(() => {
      getOrders();
    });
  }, []);
  useEffect(() => {
    const ordersInfo: typeof ordersWithInfo = orders.map((item) => {
      return {
        ...item,
        car: cars.find((_) => _._id === item.carId) as carT,
        user: users.find((_) => _._id === item.userId) as userT,
      };
    });
    setOrdersWithInfo(ordersInfo);
  }, [orders]);
  if (!user?.isAdmin) {
    navigate("/login");
  }
  return (
    <Container>
      <div className="py-4">
        <h2 className="text-center">Admin Dashboard</h2>
        <Underliner />
      </div>
      <div>
        <h4 className="py-3">Add Category</h4>
        <CategoryForm />
        <h4 className="py-3">Add Car</h4>
        <CarForm />
      </div>
      <div>
        <h2>Orders</h2>
        {ordersWithInfo.map((item) => (
          <div
            key={item._id.toString()}
            className="my-3 border p-2 border-orange-600/25 rounded-xl  colSmColLg bg-gray-400/20 space-x-7"
          >
            <div>
              <h4 className="underline">Car</h4>
              <p className=" capitalize text-orange-600 text-[18px]">
                {item.car.name}
              </p>
              <img className="size-[150px]" src={`${item.car.image}`} alt="" />
            </div>
            <div className="py-2 flex-grow">
              <h4 className="underline pb-9">Order details</h4>
              {item.info.type === "Reservation" && (
                <div>
                  <p>
                    <b>Start date:</b> {item.info.start}
                  </p>
                  <p>
                    <b>End date:</b> {item.info.start}
                  </p>
                  <p>
                    <b>Number of cars desired:</b> {item.quantity}
                  </p>
                  <p>
                    <b>Number of days:</b>{" "}
                    {getTimeDifference(item.info.start, item.info.end)}
                  </p>
                  <p>
                    <b>Total Cost:</b> $
                    {item.quantity *
                      item.car.reservationPricePerDay *
                      getTimeDifference(item.info.start, item.info.end)}
                  </p>
                </div>
              )}
            </div>
            <div>
              <h4 className="underline pb-9">User</h4>
              <div>
                <p>
                  <b>Name:</b> {item.user.firstName + " " + item.user.lastName}
                </p>
                <p>
                  <b>Email:</b> {item.user.email}
                </p>
                <p>
                  <b>Phone:</b> {item.user.phone}
                </p>
                <p>
                  <b>Address:</b>{" "}
                  {`${item.user.street}, ${item.user.city}, ${item.user.country}, ${item.user.zipCode} `}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AdminPage;
