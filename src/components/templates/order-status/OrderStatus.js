import React from "react";
import "./OrderStatus.css";
import OrderList from "../../../components/organisms/order-list/OrderList";
import Separator from "../../../components/atoms/separator/Separator";

function OrderStatus() {
  return (
    <div className="Order-status">
      <OrderList />
      <Separator />
      <OrderList />
    </div>
  );
}
export default OrderStatus;
