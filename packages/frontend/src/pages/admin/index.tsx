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

function AdminPage() {
  const [orders, setOrders] = useState<orderT[]>([]);
  const [ordersWithInfo, setOrdersWithInfo] = useState<
    (orderT & { car: carT; user: userT })[]
  >([]);
  const [users, setUsers] = useState<userT[]>([]);
  const { cars, categories } = useContext(AppContext) as appContextT;
  async function getOrders() {
    const orders = await crud.list(AppEntities.Order);
    setOrders(orders);
  }
  async function getUsers() {
    const users = await crud.list(AppEntities.User);
    setUsers(users);
  }
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
          <div className="my-3 border p-2">
            <h4>Car</h4>
            <p>{item.car.name}</p>
            <img className="size-14" src={`${item.car.image}`} alt="" />
            <div className="py-2">
              <h4>Order details</h4>
              {item.info.type === "Reservation" && (
                <div>
                  <p>
                    <b>Start date:</b> {item.info.start}
                  </p>
                  <p>
                    <b>End date:</b> {item.info.start}
                  </p>
                </div>
              )}
            </div>
            <div>
              <h4>User</h4>
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
